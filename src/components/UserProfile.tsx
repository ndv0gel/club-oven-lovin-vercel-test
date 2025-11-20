"use client";

import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

const UserProfile = () => {
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    dietaryPreferences: ["Vegan"],
  };

  return (
    <main className="min-vh-100 d-flex flex-column">
      <Container
        style={{
          maxWidth: "1100px",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {/* PROFILE CARD */}
        <Card className="shadow-sm p-4 mb-4 userprofile-card">
          <Row className="align-items-center">
            <Col md="auto" className="text-center mb-3 mb-md-0">
              <div
                className="userprofile-avatar"
                style={{ width: 120, height: 120 }}
              >
                Image of {user.name}
              </div>
            </Col>

            <Col>
              <h2 className="fw-bold mb-2">{user.name}</h2>
              <p className="text-muted mb-2">{user.email}</p>

              <div className="mb-3">
                {user.dietaryPreferences.map((pref) => (
                  <Badge key={pref} className="me-2 mb-2 userprofile-badge">
                    {pref}
                  </Badge>
                ))}
              </div>

              <Button href="/userprofile/edit" className="userprofile-primary-accent">
                Edit Profile
              </Button>
            </Col>
          </Row>
        </Card>
      </Container>
    </main>
  );
};

export default UserProfile;