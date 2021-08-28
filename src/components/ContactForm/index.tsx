import Swal from 'sweetalert2';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import style from './ContactForm.module.css';
import { EmailAttributes, EventTargetForm } from '../../interfaces/email';

const getEmailAttributes = (form: EventTargetForm): EmailAttributes => (
  Object.fromEntries(
    [...form.children]
      .map((item) => [item.name, item.value])
      .filter(([key, value]) => key && value),
  ));

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailAttributes = getEmailAttributes(event.target as EventTargetForm);

    try {
      setIsLoading(true);
      await axios.post('/api/contact', emailAttributes);

      Swal.fire({
        title: 'E-mail enviado com sucesso!',
        text: 'Em breve retornaremos sua mensagem.',
        icon: 'success',
        confirmButtonText: 'Entendido',
      });
    } catch (error) {
      Swal.fire({
        title: 'Erro ao enviar e-mail :(',
        text: 'Tente novamente mais tarde, ou entre em contato pelas nossas redes sociais.',
        icon: 'error',
        confirmButtonText: 'Entendido',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={style.form} onSubmit={sendEmail}>
      <input type="text" name="senderName" required placeholder="Nome" />
      <input type="email" name="senderEmail" required placeholder="Insira seu E-mail" />
      <input type="text" name="subject" required placeholder="Assunto" />
      <textarea
        name="text"
        placeholder="Digite sua mensagem aqui"
        required
        rows={4}
      />
      <button className="primary-button" disabled={isLoading} type="submit">
        {isLoading ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}
