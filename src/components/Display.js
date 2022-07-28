import React from 'react';
import Card from './Card';

const repo = {
  name: 'Chat App',
  description: 'Chat App for developers to meet over common interests and goals',
  
};

export default function Display() {
  return (
    <div>
        <Card name={repo.name} description={repo.description} id='chat-app' />
    </div>
  );
}
