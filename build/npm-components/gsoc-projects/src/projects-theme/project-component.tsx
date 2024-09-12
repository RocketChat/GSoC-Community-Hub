'use client';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { GithubIcon, MessageCircleIcon } from './icons'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

interface Project {
  title: string;
  projectDescription: string;
  githubLink: string;
  channelLink: string;
  contributor: string;
  skills: string;
  mentor: string;
  year: string;
}

interface Session {
  speaker: string;
  speakerDescription: string;
  title: string;
  start: string;
  end: string;
  duration: string;
  youtube: string;
}

interface EventsComponentProps {
  data: Project[];
}

const ProjectsComponent: React.FC<EventsComponentProps> = ({ data } : { data: Project[] }) => {
  const years = Array.from(new Set(data.map((session : any) => session.year))).sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState<number | null>(years[0]);

  const filteredData = selectedYear
    ? data.filter((session : any) => session.year === selectedYear)
    : data;

  return (
    <div style={{ paddingLeft: '1rem', paddingRight: '1rem', marginBottom:"1rem" }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: "2rem", marginBottom: "2rem" }}>
  <div style={{ 
    fontSize: "2rem", 
    fontWeight: '700', 
    color: '#333',
    textAlign: 'center',
    maxWidth: '90%'
  }}>
    Google Summer of Code Project Ideas
  </div>
</div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <ButtonGroup>
          {years.map((year) => (
            <Button
              key={year}
              onClick={() => setSelectedYear(year)}
              style={{ backgroundColor: selectedYear === year ? '#0056b3' : '#0d6efd' }}
            >
              {year}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      {filteredData.map((project: any, index: number) => (
        <div>
          <Card style={{ margin: 'auto', marginTop: '2rem', maxWidth: '48rem' }}>
            <Card.Header>
              <div>
                <h5 style={{ fontWeight: '600' }}>{project.title}</h5>
                <p style={{ fontSize: '0.875rem', color: '#6B7280', whiteSpace: 'pre-line' }}>
                  {project.projectDescription}
                </p>
              </div>
            </Card.Header>
            <Card.Body>
              {/* <h4 style={{ fontWeight: '600' }}>{project.title}</h4> */}
              <div
                style={{
                  marginTop: '0.5rem',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>
                    <span style={{ fontWeight: 'bold' }}>{'👥 Mentor(s)'}:</span> {project.mentor}
                  </span>
                </div>
                {/* <span style={{ marginLeft: '1.75rem', color: '#6B7280' }}>
                  {'Contributor'}: {project.mentor}
                </span> */}
              </div>
              <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>
                <span style={{ fontWeight: 'bold' }}>{'💪 Desired Skills'}:</span> {project.skills}
              </div>
              <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>
                <span style={{ fontWeight: 'bold' }}>{'🎯 Goals/Deliverables'}:</span>{' '}
                {project.skills}
              </div>
              <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>
                <span style={{ fontWeight: 'bold' }}>{'⏳ Project Duration'}:</span>{' '}
                {project.skills}
              </div>
              <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>
                <span style={{ fontWeight: 'bold' }}>{'📈 Difficulty'}:</span> {project.skills}
              </div>
              <div
                style={{
                  marginTop: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <GithubIcon style={{ height: '1.5rem', width: '1.5rem' }} />
                {React.createElement(Link as any, { href: project.githubLink, style: { fontSize: '0.875rem' } }, "GitHub")}
              </div>
              <div
                style={{
                  marginTop: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <MessageCircleIcon
                  style={{ height: '1.5rem', width: '1.5rem', color: '#DC2626' }}
                />
                {React.createElement(Link as any, { href: project.channelLink, style: { fontSize: '0.875rem' } }, "Rocket Chat Channel")}
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};


export default ProjectsComponent;
