// src/components/stateless/email/EmailTemplate.tsx

import { ContactFormData } from '@/lib/validation/contact.schema';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';

export const EmailTemplate = ({
  name,
  email,
  subject,
  message,
}: ContactFormData) => (
  <Html>
    <Head />
    <Preview>New contact from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Text style={text}>
          <strong>Name:</strong> {name}
        </Text>
        <Text style={text}>
          <strong>Email:</strong> {email}
        </Text>
        <Text style={text}>
          <strong>Subject:</strong> {subject}
        </Text>
        <Text style={text}>
          <strong>Message:</strong>
        </Text>
        <Text style={messageStyle}>{message}</Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px',
  maxWidth: '600px',
};

const h1 = {
  color: '#f97316',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 20px',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  margin: '10px 0',
};

// ✅ Cambiado: sin "as const" y renombrado para evitar conflicto
const messageStyle = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '1.6',
  padding: '15px',
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
};
