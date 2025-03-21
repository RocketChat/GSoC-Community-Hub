<script module>
</script>

<script lang="ts">
  let { conference, sessions } = $props();
  import { onMount } from 'svelte';
  import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardSubtitle,
    Badge,
  } from '@sveltestrap/sveltestrap';
  import { Styles } from '@sveltestrap/sveltestrap';
  
  // Date formatting helper
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  }
  
  // Group sessions by date
  $effect(() => {
    if (sessions) {
      groupedSessions = groupSessionsByDate(sessions);
    }
  });
  
  let groupedSessions = $state({});
  
  function groupSessionsByDate(sessions) {
    const grouped = {};
    
    sessions.forEach(session => {
      const date = new Date(session.startTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      if (!grouped[date]) {
        grouped[date] = [];
      }
      
      grouped[date].push(session);
    });
    
    // Sort sessions by startTime within each date
    Object.keys(grouped).forEach(date => {
      grouped[date].sort((a, b) => {
        return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
      });
    });
    
    return grouped;
  }
</script>

<Styles />
<div class="event-schedule-container">
  <Container>
    <Row class="mb-4">
      <Col>
        <div class="event-header">
          <h2 class="event-title">{conference.title}</h2>
          <p class="event-dates">
            {new Date(conference.startDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} - {new Date(conference.endDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <p class="event-description">{conference.description}</p>
        </div>
      </Col>
    </Row>
    
    {#each Object.keys(groupedSessions) as date}
      <Row class="mb-4">
        <Col>
          <h3 class="date-header">{date}</h3>
          <div class="sessions-container">
            {#each groupedSessions[date] as session}
              <Card class="session-card mb-3">
                <CardHeader>
                  <div class="session-time">
                    {new Date(session.startTime).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })} - {new Date(session.endTime).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      timeZoneName: 'short'
                    })}
                  </div>
                </CardHeader>
                <CardBody>
                  <CardTitle tag="h5">{session.title}</CardTitle>
                  {#if session.speaker}
                    <CardSubtitle tag="h6" class="mb-2 text-muted">
                      {session.speaker}
                    </CardSubtitle>
                  {/if}
                  <p class="session-description">{session.description}</p>
                  {#if session.tags && session.tags.length > 0}
                    <div class="session-tags">
                      {#each session.tags as tag}
                        <Badge color="primary" class="me-1">{tag}</Badge>
                      {/each}
                    </div>
                  {/if}
                </CardBody>
              </Card>
            {/each}
          </div>
        </Col>
      </Row>
    {/each}
  </Container>
</div>

<style>
  .event-schedule-container {
    padding: 2rem 0;
    margin: 2rem 0;
  }
  
  .event-header {
    text-align: center;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #1D74F5;
  }
  
  .event-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #1D74F5;
  }
  
  .event-dates {
    font-size: 1.25rem;
    color: #666;
    margin-bottom: 1rem;
  }
  
  .event-description {
    font-size: 1.1rem;
    color: #555;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .date-header {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #eaeaea;
    color: #333;
  }
  
  .sessions-container {
    margin-left: 1rem;
    border-left: 2px solid #eaeaea;
    padding-left: 1.5rem;
  }
  
  :global(.session-card) {
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    border: none !important;
    border-radius: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  :global(.session-card:hover) {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  }
  
  :global(.session-card .card-header) {
    background-color: #f5f7fa;
    border-bottom: none;
    font-weight: 500;
    border-top-left-radius: 8px !important;
    border-top-right-radius: 8px !important;
  }
  
  .session-time {
    font-size: 1.1rem;
    color: #1D74F5;
  }
  
  .session-description {
    margin-top: 0.75rem;
    margin-bottom: 1rem;
    color: #555;
    line-height: 1.6;
  }
  
  .session-tags {
    margin-top: 1rem;
  }
  
  @media (max-width: 768px) {
    .event-title {
      font-size: 2rem;
    }
    
    .event-dates {
      font-size: 1.1rem;
    }
    
    .date-header {
      font-size: 1.5rem;
    }
    
    .sessions-container {
      margin-left: 0.5rem;
      padding-left: 1rem;
    }
  }
</style>
