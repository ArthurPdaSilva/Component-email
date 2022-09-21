import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import Button from '../Button';
import Textarea from '../Textarea';
import Input from '../Input';
import emailjs from '@emailjs/browser';
import './form.css';

export default function Form() {
  const [ nome, setNome ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ mensagem, setMensagem ] = useState('');

  const handleSubmit = useCallback( async (e) => {
    e.preventDefault();
    if(nome.length > 5 && mensagem.length > 0 ) {
      let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
      if(!regex.test(email.trim())) toast.error('Email inválido!');
      else {
        toast.success('Campos preenchidos corretamente!');
        
        const templateParams = {
          from_name: nome.trim(),
          message: mensagem.trim(),
          email: email.trim()
        }
        await emailjs.send('service_b9jp0hs', 'template_9abvgnl', templateParams, 'TYm9veQi33sbJjSTu')
        .then(() => {
          toast.success('Email enviado com sucesso!');
          setNome('');
          setEmail('');
          setMensagem('');
        })
        .catch(() => toast.error('Falha no envio!'));
      }
    } else toast.error('Preencha corretamente os campos!');
  }, [email, mensagem, nome])

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input type='text' placeholder='Nome' state={setNome} value={nome}/>
      <Input type='email' placeholder='Email' state={setEmail} value={email}/>
      <Textarea placeholder='Mensagem' state={setMensagem} value={mensagem}/>
      <Button type='submit' text='ENVIAR' />
    </form>
  );
}

