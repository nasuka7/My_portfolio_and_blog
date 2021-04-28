import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

const SUBJECT_TITLE = 'お問い合わせ';
const STATIC_FORMS_URL = 'https://api.staticforms.xyz/submit';
const ACCESS_KEY = process.env.STATIC_FORMS_ACCESS_KEY as string;

interface ContactParams {
  name: string;
  email: string;
  message: string;
}

export const useSendContactForm = (): [
  string,
  (postData: ContactParams) => void
] => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const sendContactForm = useCallback(async (postData: ContactParams) => {
    const postParams = {
      ...postData,
      subject: SUBJECT_TITLE,
      replyTo: 'n4suka7@gmail.com',
      accessKey: ACCESS_KEY,
    };
    const response = await fetch(STATIC_FORMS_URL, {
      method: 'POST',
      body: JSON.stringify(postParams),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((jsonData) => jsonData as { success: boolean; message: string })
      .catch((e) => {
        console.error('もう一度入力して下さい', e);
        const error = e as Error;
        return { success: false, message: error.message };
      });
    response.success
      ? void router.push('contact_success')
      : setErrorMessage(response.message);
  }, []);
  return [errorMessage, sendContactForm];
};