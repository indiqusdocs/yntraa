import React, { useState } from 'react';
import Link from '@docusaurus/Link'; 
import { 
  FaNetworkWired, 
  FaServer, 
  FaDatabase, 
  FaQuestionCircle, 
  FaBookOpen,       
  FaClipboardList,
  FaTerminal,       
  FaChartLine       
} from 'react-icons/fa';

// Reusable style for icons to avoid repeating the CSS variable definition
const iconStyle = { color: 'var(--ifm-color-primary)', marginRight: '10px' };

// Split into two explicit data arrays to cleanly separate rows by category
const ServiceList = [
  {
    title: 'Networking and Security',
    icon: <FaNetworkWired style={iconStyle} />,
    link: '/docs/category/network-and-security',
    description: 'Network and security services help you create a safe, reliable, and well-connected cloud environment. This service allow you to build private networks, manage how data moves between resources, protect your applications, and keep services available.',
  },
  {
    title: 'Compute',
    icon: <FaServer style={iconStyle} />,
    link: '/docs/category/compute',
    description: 'Provision, configure, and scale compute resources. It includes Windows Instances, RHEL, and Other Linux Instances for OS-specific deployments, Managed Kubernetes for running clusters, and Autoscale for on-demand capacity adjustment.',
  },
  {
    title: 'Storage',
    icon: <FaDatabase style={iconStyle} />,
    link: '/docs/category/storage',
    description: 'Cloud storage solutions supporting both block and object storage types. The Storage section covers Block Volumes for attaching high-performance, resizable storage to your instances, and Object Storage Buckets for storing unstructured data at scale.',
  },
  {
    title: 'Other Services',
    icon: <FaTerminal style={iconStyle} />,
    link: '/docs/category/other-services',
    description: 'Discover services powering your cloud journey. From Bare Metal, Virtual Desktops, and Relational Databases to VM, Kubernetes, File Storage, DevOps, Messaging, Endpoint Recovery, Cloud Assessment, Migration Assist, and Resiliency Assurance.',
  },
];

const ResourceList = [
  {
    title: 'Tools and Utilities',
    icon: <FaChartLine style={iconStyle} />,
    link: '/docs/category/tools-and-utilities',
    description: 'Keep a record of cloud utilities and assets.',
  },
  {
    title: 'FAQs',
    icon: <FaQuestionCircle style={iconStyle} />,
    link: '/docs/FAQs',
    description: 'Find quick answers to common questions.',
  },
  {
    title: 'Knowledge Base',
    icon: <FaBookOpen style={iconStyle} />,
    link: '/docs/Knowledgebase/IPv4Networking',
    description: 'Explore in-depth articles.',
  },
  {
    title: 'Release Notes',
    icon: <FaClipboardList style={iconStyle} />,
    link: '/docs/ReleaseNotes/Ver1000',
    description: 'Stay updated with our latest releases.',
  },
];

function Feature({ title, description, link, icon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        border: '1px solid var(--ifm-color-primary)',
        borderRadius: 12,
        padding: 20,
        // Docusaurus theme-dependent card background
        backgroundColor: 'var(--ifm-card-background-color, var(--ifm-background-color))',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        // Shadow adjusted to be transparent enough to look good on both dark and light modes
        boxShadow: isHovered 
          ? '0 12px 24px rgba(0, 0, 0, 0.25)' 
          : '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Link to={link} style={{ color: 'inherit', textDecoration: 'none', height: '100%' }}>
        <h3 style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginTop: 0,
          marginBottom: '12px',
          fontSize: '1.0rem',
          color: 'var(--ifm-heading-color)'
        }}>
          {icon}
          {title}
        </h3>
        <p style={{ 
          margin: 0, 
          fontSize: '0.9rem', 
          lineHeight: '1.4',
          color: 'var(--ifm-font-color-base)'
        }}>
          {description}
        </p>
      </Link>
    </div>
  );
}

// Universal grid setup supporting up to 4 columns on full-size viewports
function CardGrid({ list }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
      gap: '24px',
    }}>
      {list.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </div>
  );
}

export default function HomepageFeatures() {
  // Styles for row header text and dividing rule line
  const sectionTitleStyle = {
    textAlign: 'left',
    color: 'var(--ifm-heading-color)',
    fontSize: '1.4rem',
    marginBottom: '1.0rem',
    borderBottom: '2px solid var(--ifm-hr-border-color, rgba(0, 0, 128, 0.1))',
    paddingBottom: '8px',
    fontWeight: 'bold',
  };

  return (
    <section style={{
      padding: '3rem 1rem',
      maxWidth: '1200px', 
      margin: '0 auto',
    }}>
      {/* Row 1: Services (4 columns) */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={sectionTitleStyle}>Services</h2>
        <CardGrid list={ServiceList} />
      </div>

      {/* Row 2: Resources (4 columns) */}
      <div>
        <h2 style={sectionTitleStyle}>Resources</h2>
        <CardGrid list={ResourceList} />
      </div>
    </section>
  );
}