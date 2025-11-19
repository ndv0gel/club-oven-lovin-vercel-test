'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-3 fw-bold mb-4" style={{ color: '#1a5f4f' }}>
              Cook Smart, Eat Well, Save Money
            </h1>
            <p className="lead mb-4" style={{ color: '#6c757d' }}>
              Discover delicious recipes designed for college students with limited kitchens, tight budgets, and busy schedules.
            </p>
            <ul className="list-unstyled mb-4" style={{ color: '#6c757d' }}>
              <li className="mb-2">✓ Toaster oven-friendly recipes</li>
              <li className="mb-2">✓ Price breakdowns per serving</li>
              <li className="mb-2">✓ Ingredients available near UH campus</li>
              <li className="mb-2">✓ Puʻu filters (vegan, gluten-free, etc)</li>
            </ul>
            <div className="d-flex gap-3 flex-wrap">
              <Button 
                variant="primary" 
                size="lg"
                style={{ 
                  backgroundColor: '#ff6b35', 
                  borderColor: '#ff6b35',
                  borderRadius: '25px',
                  padding: '12px 30px'
                }}
                as={Link}
                href="/auth/signin"
              >
                Sign In to Start Cooking
              </Button>
              <Button 
                variant="outline-primary" 
                size="lg"
                style={{ 
                  borderColor: '#ff6b35',
                  color: '#ff6b35',
                  borderRadius: '25px',
                  padding: '12px 30px'
                }}
                as={Link}
                href="/browse-recipie"
              >
                Browse Recipes
              </Button>
            </div>
          </Col>
          <Col md={6} className="text-center mt-4 mt-md-0">
            <Image 
              src="/images/toaster-oven-pizza.jpg" 
              alt="Toaster Oven Pizza" 
              width={600} 
              height={450}
              className="rounded shadow-lg img-fluid"
              style={{ objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HeroSection;
