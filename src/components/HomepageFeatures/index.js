import React from 'react';

const FeatureList = [
  {
    title: 'User Documentation',
   link: '/docs/Subscribers/intro',
   description: 'Click here to read the instructions to streamline operations, automate tasks, and optimize your digital services.',
  },
  {
   title: 'Frequently Asked Questions',
  link: '/docs/Subscribers/FAQs',
  description: 'Click here to access the frequently asked questions.',
 },
 {
    title: 'Knowledge Base',
    link: '/docs/Knowledgebase/intro',
    description: 'Click here to access the knowledgebase.',
  },
];

function Feature({ title, description, link }) {
  return (
    <div style={{
      border: '1px solid #000080',
      borderRadius: 12,
      padding: 20,
      margin: 16,
      width: 300,
      boxShadow: '0 4px 8px rgba(0, 120, 212, 0.1)',
    }}>
      <a href={link} style={{ color: 'inherit', textDecoration: 'none' }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: '3rem 0',
      width: '100%',
    }}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
