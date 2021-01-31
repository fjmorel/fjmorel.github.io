import { Project } from '@/types/models';

export const projects: Project[] = [
  {
    title: 'Cosmic Companion',
    subheading: '(personal project)',
    description: 'I built an unofficial companion app for the Cosmic Encounter board game to simplify game setup. It secretly assigns random character choices to each player based on what expansions and level of game you are playing. This was also an opportunity to experiment with Material Design for a simple, bold design. This project began as web page, migrated to a WebView-based Android app, and is now available as both a website and a native Android app.',
    techs: 'HTML, JavaScript, AngularJS, CSS, Java, Android, Android Studio, XML, JSON',
    actions: [
      { url: 'https://github.com/fjmorel/cosmic', text: 'View Source' },
      { url: '/cosmic/', text: 'Open' },
    ],
  },
  {
    title: 'Hue Band Controls Android App',
    subheading: '(personal project, in private beta)',
    description: 'I had smart light bulbs and a smart watch, so I built an Android app with a background service to receive commands from a Microsoft Band and send them to a Philips Hue lighting system. For now, it can control white color temperature and brightness levels. As this app is still in progress, I am keeping the app in a private beta for now.',
    techs: 'Android, Java, Android Studio, XML',
    actions: [
      { url: 'https://play.google.com/store/apps/details?id=net.fmorel.hueband', text: 'View on Play Store' },
    ],
  },
  {
    title: 'Region 4 Energy & Water Dashboard',
    subheading: '(as Building System Analyst)',
    description: 'I designed & built a system to let the organization view and analyze utility data in the region in an easy to use manner and facilitate reporting our energy status for the measure mandated by Executive Order 13423. The system imports utility data from national system and stores data in Google Drive to power a dashboard on a Google Site. It has been through several major revisions due to improvements to Google Apps Script and acquired experience with JavaScript. It initially used UI Service, a GWT-like framework for Google Site gadgets, then transitioned to a jQuery-powered page, and recently transitioned to an AngularJS application.',
    techs: 'Google Apps, Google Apps Script, HTML, JavaScript, jQuery, AngularJS, CSS',
  },
  {
    title: 'Building Automation System (BAS) Monitor Service',
    subheading: '(as Building System Analyst)',
    description: 'I designed & built a script to check whether a server running InetSupervisor is working as intended based on several unique conditions not supported by the server application itself. It has been expanded over time with additional conditions and checks of the application. While it was initially a PowerShell scheduled task due to limited technical tools, I eventually built a more robust Windows service to restart the BAS as needed to resolve issues.',
    techs: 'PowerShell, Microsoft SQL Server, InetSupervisor, LNS, C#',
  },
  {
    title: 'Waste Diversion Tracker',
    subheading: '(as Building System Analyst)',
    description: 'I enhanced a set of Google Spreadsheets with Apps Script to archive waste diversion reports, track data, and display the current waste diversion status of the region for the measure mandated by Executive Order 13514. The spreadsheets allow users to enter amount of materials disposed and diverted (recycled/reused) by container, which combine to show the diversion rate for at the building, service center, and regional levels. A separate script allows users to send in reports by email for automated archival in a Google Group by building and month.',
    techs: 'Google Apps, Google Apps Script, HTML, JavaScript, CSS',
  },
  {
    title: 'Advanced Metering Regional Data Collection Service',
    subheading: '(as Building System Analyst)',
    description: 'I replaced a legacy third-party data collector with a more robust and efficient service. It eliminated instances of backlogging of uncollected data that frequently occurred with the older service.',
    techs: 'C#, SQL, Microsoft SQL Server',
  },
];
