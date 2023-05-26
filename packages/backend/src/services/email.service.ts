import Mailgen from 'mailgen';
import nodemailer from 'nodemailer';
import 'dotenv/config';
import { TEmailBody } from '../types/email.type';

class EmailService {
  private link: string = 'http://localhost:5000';

  private linkLogin: string = 'http://localhost:3000';

  private emailGenerateContent(body: TEmailBody): string {
    const mailGenerator = new Mailgen({
      theme: 'default',
      product: {
        name: 'Mailgen',
        link: this.linkLogin
      }
    });

    const email = {
      body
    };

    return mailGenerator.generate(email);
  }

  private transporter() {
    return nodemailer.createTransport({
      host: 'smtp.meta.ua',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
      }
    });
  }

  private async sendEmail(email: string, subject: string, content: string): Promise<boolean> {
    try {
      const msg = {
        from: process.env.GMAIL_USERNAME,
        to: email,
        subject,
        html: content
      };

      await this.transporter().sendMail(msg);
      return true;
    } catch (error) {
      throw new Error('Failed to send email');
      return false;
    }
  }

  public async sendEmailVerifyToken(email: string, verificationToken: string): Promise<boolean> {
    const content = this.emailGenerateContent({
      name: 'Guest',
      intro: 'Welcome! Congratulations on registering on our website',
      action: {
        instructions: 'Click on the link to confirm your account:',
        button: {
          color: '#22BC66',
          text: 'Confirm your account',
          link: `${this.link}/api/v1/auth/verify/${verificationToken}`
        }
      },
      outro: "Need help, or have questions? Just reply to this email, we'd love to help."
    });

    return this.sendEmail(email, 'Verify Email', content);
  }

  public async sendEmailResetPassword(email: string, password: string): Promise<boolean> {
    const content = this.emailGenerateContent({
      name: 'Guest',
      intro: 'Hello! You have sent a password reset request',
      action: {
        instructions: `Your new temporary password: ${password}`,
        button: {
          color: '#22BC66',
          text: 'Sign in',
          link: this.linkLogin
        }
      },
      outro: 'We advise you to change this password to your own as soon as possible.'
    });

    return this.sendEmail(email, 'Password recovery', content);
  }

  public async sendEmailChangePassword(email: string): Promise<boolean> {
    const content = this.emailGenerateContent({
      name: 'Guest',
      intro: 'Hello! You have successfully changed your password',
      action: {
        instructions: 'Sign in',
        button: {
          color: '#22BC66',
          text: 'Sign in',
          link: this.linkLogin
        }
      },
      outro: 'We advise you to change this password to your own as soon as possible.'
    });

    return this.sendEmail(email, 'Change password', content);
  }
}

export const emailService = new EmailService();
