import { useEffect, useRef, useState } from 'react';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import styles from '../styles/index.module.css';
import EventStrip from './EventStrip';

const detectElement = (options) => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  const callbackFn = (entries) => {
    const [entry] = entries;
    setInView(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFn, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, inView];
};

export const EventTicket = ({ tktDetail, event, error, customLink }) => {
  const [containerRef, inView] = detectElement({
    root: null,
    rootMargin: '0px 0px 100% 0px',
    threshold: 0.1,
  });

  const [open, setOpen] = useState(false);

  const errMessHelper = {
    0: "The User Email doesn't have the Speaker/Admin rights, please contact the event organizer for rights.",
    1: 'It seems there is an issue with your login, please logout and signin then try again!',
    2: 'Looks like you are not logged in, please login and try again!',
  };
  const [err, setErr] = useState(errMessHelper[2]);
  const [alertOp, setAlertOp] = useState(false);

  useEffect(() => {
    if (Object.keys(errMessHelper).includes(error)) {
      setErr(errMessHelper[error]);
      setAlertOp(true);
    }
  });

  const tktName = tktDetail.attributes.name;
  const tktPrice = tktDetail.attributes.price;
  const handleJoin = () => {
    setOpen(!open);
  };

  const showMainstage = event?.data?.attributes.is_videoroom_enabled;
  const eid = event?.data?.attributes.identifier;

  return (
    <>
      <EventStrip
        event={event.data}
        ticket={tktDetail}
        containerRef={containerRef}
        handleJoin={handleJoin}
        showMainstage={showMainstage}
        eid={eid}
        customLink={customLink}
      />
      {!inView && (
        <TopNav
          brand={tktName}
          price={tktPrice}
          handleJoin={handleJoin}
          showMainstage={showMainstage}
          eid={eid}
          customLink={customLink}
        />
      )}
    </>
  );
};

const InNav = ({
  brand,
  price,
  handleJoin,
  containerRef,
  showMainstage,
  eid,
  customLink,
}) => (
  <Navbar
    ref={containerRef}
    className={styles.event_ticket_innav}
    variant="dark"
  >
    <Container>
      <Navbar.Brand>
        {brand}{' '}
        <Badge as="span" pill bg="light" text="secondary">
          {price || 'Free'}
        </Badge>
      </Navbar.Brand>
      <Nav className="me-auto" />
      {showMainstage ? (
        <Button onClick={handleJoin}>Join</Button>
      ) : (
        <Button
          href={customLink || `/conferences/greenroom/${eid}`}
          target="_blank"
        >
          Join
        </Button>
      )}
    </Container>
  </Navbar>
);

const TopNav = ({
  brand,
  price,
  handleJoin,
  showMainstage,
  eid,
  customLink,
}) => (
  <Navbar fixed="bottom" className={styles.event_ticket_nav} variant="dark">
    <Container>
      <Navbar.Brand style={{ fontSize: 'inherit', fontFamily: 'monospace' }}>
        {brand}{' '}
        <Badge as="span" pill bg="light" text="secondary">
          {price || 'Free'}
        </Badge>
      </Navbar.Brand>
      <Nav className="me-auto" />
      {/* <Link href={"https://bbb.rocket.chat/b/deb-ped-v5x-mp5"}>
        <Button>Join</Button>
        </Link> */}
      {showMainstage ? (
        <Button size="sm" onClick={handleJoin}>
          Join
        </Button>
      ) : (
        <Button
          size="sm"
          href={customLink || `/conferences/greenroom/${eid}`}
          target="_blank"
        >
          Join (BBB)
        </Button>
      )}{' '}
    </Container>
  </Navbar>
);
