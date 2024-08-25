'use client';
import React from 'react';
// import { events as PostType } from "payload/types";


interface EventsComponentProps {
  data: any;
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const SessionComponent: React.FC<EventsComponentProps> = ({ sessions } ) => {
  return (
    <div>
          {sessions.map((session: Session, index: number) => (
              <Card key={index} style={{ margin: 'auto', marginTop: '2rem', maxWidth: '38rem' }}>
                <Card.Header>
                  <div>
                    <h5 style={{ fontWeight: '600' }}>{session.Speaker}</h5>
                    {session.Mentor.length !== 0 ? (
                       <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                       Mentor: {session.Mentor}
                     </p>
                  ) : (
                    <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                  
                  </p>
                  )}
                
                  </div>
                </Card.Header>
                <Card.Body>
                  {/* <h4 style={{ fontWeight: '600' }}>{session.Title}</h4>
                  <p>{session.Description}</p> */}
                  <Accordion style={{}}>
                    <Accordion.Item eventKey="0" style={{  }}>
                        <Accordion.Header>{session.Title}</Accordion.Header>
                    <Accordion.Body>
                    {session.Description}
                  </Accordion.Body>
                  </Accordion.Item>
                  </Accordion>
                  <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <ClockIcon style={{ height: '1.25rem', width: '1.25rem', color: '#6B7280' }} />
                      <span style={{ color: '#6B7280' }}>
                      {new Date(session.Start).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })} - 
                      {new Date(session.End).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}
                    </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <ClockIcon style={{ height: '1.25rem', width: '1.25rem', color: '#6B7280' }} />
                      <span style={{ color: '#6B7280' }}>{session.Duration} min</span>
                    </div>
                  </div>
                  {session.Youtube !== null ? (
                      <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <YoutubeIcon style={{ height: '1.5rem', width: '1.5rem', color: '#DC2626' }} />
                        <span style={{ color: '#2563EB' }}>{session.Youtube}</span>
                      </div>
                  ) : (
                  <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <YoutubeIcon style={{ height: '1.5rem', width: '1.5rem', color: '#DC2626' }} />
                        <span style={{ color: '#2563EB' }}>Coming...</span>
                      </div>
                  )}
                </Card.Body>
              </Card>
            ))}
          </div>
  );
};

export default EventsComponent;

function ClockIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle
        cx='12'
        cy='12'
        r='10'
      />
      <polyline points='12 6 12 12 16 14' />
    </svg>
  );
}

function YoutubeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17' />
      <path d='m10 15 5-3-5-3z' />
    </svg>
  );
}
