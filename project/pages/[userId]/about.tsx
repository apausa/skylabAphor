/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { getSession } from 'next-auth/client';

export default function About() {
  return <h1>About</h1>;
}

// Secure pages server side.
export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: process.env.DASHBOARD,
        redirect: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}