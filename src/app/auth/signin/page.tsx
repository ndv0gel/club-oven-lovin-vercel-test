'use client';

import { signIn } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row, Alert } from 'react-bootstrap';
import { useState } from 'react';

/** The sign in page. */
const SignIn = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    console.log('Attempting sign in with email:', email);

    const result = await signIn('credentials', {
      callbackUrl: '/user-home-page',
      email,
      password,
      redirect: false,
    });

    console.log('Sign in result:', result);

    if (result?.error) {
      console.error('Sign in failed: ', result.error);
      setError(`Sign in failed: ${result.error}`);
      setLoading(false);
    } else if (result?.ok) {
      console.log('Sign in successful, redirecting...');
      window.location.href = result.url || '/user-home-page';
    }
  };

  return (
    <main className="signin-page">
      <Container>
        <Row className="justify-content-center">
          <Col xs={5}>
            <h1 className="text-center">Sign In</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Card>
              <Card.Body>
                <Form method="post" onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <input name="email" type="text" className="form-control" placeholder="john@foo.com" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <input name="password" type="password" className="form-control" />
                  </Form.Group>
                  <Button type="submit" className="mt-3" disabled={loading}>
                    {loading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer>
                Don&apos;t have an account?
                <a href="/auth/signup">Sign up</a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SignIn;
