const id = "reference/overlays_news_events.md";
						const collection = "docs";
						const slug = "reference/overlays_news_events";
						const body = "\nCurrently event data can only be added to the chart via the [initial data state provide via the config](../state). It will be in the near future be possible to add events via the API.\n\n## Event Markers\n\nEvent makers representing buy or sell, are placed on the primary chart pane, above the individual price history intervals (candles) they are associated with via their timestamp.\n\nEventX Chart provides a number of marker icon options. Their size and colour is also configurable. The [theming configuration](../themes#events) has more details.\n\n## Event Entry\n\nAn individual event entry has the following format:\n\n```javascript\nconst event = {\n  timestamp: 1558605600000, // number - time stamp\n  id: \"012336352\",          // string - event id\n  title: \"Some Event\",      // string\n  content: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\", // string (HTML)\n  url: \"https://www.coindesk.com/\" // string - URL\n}\n```\n\n## Add Event\n\nA single event can be added to the chart data state via the following:\n\n```javascript\nchart.addEvent(event)\n```\nWhere the [event entry object format](#event-entry) is defined in the previous section. ``addEvent()`` will validate the event entry and return a boolean as the result.\n\n## Remove Event\n\nNot implemented yet.\n\n## Event State Data\n\nThe [chart State Data](../state) provides a collection of all of the events that can be displayed on the chart. [Event entries (objects)](#event-entry) are grouped by timestamp in an array as it may be possible that multiple events may be executed on the same time interval (candle).\n\n```javascript\nconst config = {\nohlcv: [],\nprimary: [],\nsecondary: [],\n  events: {\n    1558666800000: [\n      {            \n        timestamp: 1558666800000,\n        id: \"abc123\",\n        title: \"Some Event\",\n        content: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\n        link: \"https://www.coindesk.com/\"\n      }\n    ]\n  },\n}\n```\n## Event Marker Event\n\nBy default, if a event marker is clicked, it will invoke the events overlay method which will display the event data over the chart.\n\nThis can be disabled via the [chart config](../../02_configuration).\n\n```javascript\nconst config = {\n  events: { \n    display: true,\n    displayInfo: false \n  }\n}\n```\n\nThe chart emits a ``event_selected`` [event](../../events) which you can subscribe to and invoke your own method.\n\nThe event will pass the information for that [event entry](#event-entry) to the subscribed event listener.\n";
						const data = {title:"Overlay News Events",description:"News Events data and markers",editUrl:true,head:[],template:"doc"};
						const _internal = {
							type: 'content',
							filePath: "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/src/content/docs/reference/overlays_news_events.md",
							rawData: "\ntitle: Overlay News Events\ndescription: News Events data and markers",
						};

export { _internal, body, collection, data, id, slug };
