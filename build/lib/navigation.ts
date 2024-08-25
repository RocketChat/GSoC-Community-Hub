
const navItems  = [
  {
    "type": "link",
    "link": "/",
    "label": "home"
  },
  {
    "type": "dropdown",
    "dropdown": [
      {
        "type": "link",
        "link": "/demo-day",
        "label": "GSoC Demo Day"
      },
      {
        "type": "link",
        "link": "/events",
        "label": "GSoC Alumni Summit"
      },
    ],
    "label": "events"
  },
  {
    "type": "dropdown",
    "dropdown": [
      {
        "type": "link",
        "link": "/events",
        "label": "Open Source AI Club"
      },
    ],
    "label": "meet-ups"
  },
  {
    "type": "dropdown",
    "dropdown": [
      {
        "type": "link",
        "link": "/events",
        "label": "Rocket.Chat Apps Workshop"
      },
      {
        "type": "link",
        "link": "/events",
        "label": "Prompt Engineering Workshop"
      },
    ],
    "label": "workshops"
  },
  {
    "type": "link",
    "link": "/projects",
    "label": "projects"
  },
];

export default navItems;