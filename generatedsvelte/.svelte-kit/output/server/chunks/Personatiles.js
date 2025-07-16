import { F as noop, N as sanitize_props, O as rest_props, A as push, P as fallback, Q as spread_attributes, R as clsx, S as slot, M as bind_props, E as pop, K as attr_class, J as attr, I as escape_html, T as copy_payload, U as assign_payload, V as spread_props, W as ensure_array_like, X as store_get, Y as unsubscribe_stores, Z as attr_style, _ as stringify } from "./index.js";
import "clsx";
import { R as Row, C as Col } from "./Row.js";
import { c as classnames, S as Styles, C as Container, D as Dropdown, a as DropdownToggle, d as DropdownMenu, e as DropdownItem, o as onDestroy } from "./Menubar.js";
import { w as writable } from "./index2.js";
const now = () => Date.now();
const raf = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (_) => noop()
  ),
  now: () => now(),
  tasks: /* @__PURE__ */ new Set()
};
function loop(callback) {
  let task;
  if (raf.tasks.size === 0) ;
  return {
    promise: new Promise((fulfill) => {
      raf.tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      raf.tasks.delete(task);
    }
  };
}
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
const herotitle = "Welcome to our <b style='color:red'>community</b>";
const herosub = "Let's dream, share, and collaborate in shaping the future of the Rocket.Chat ecosystem together !!";
const leftlink = "Read the Guides";
const rightlink = "Read Release Notes";
const searchactions = {
  placeholder: "Find commmunity information",
  menu: {
    top: "Ask AI",
    dropdown: [
      { label: "Community posts and messages" },
      { label: "---" },
      { label: "Documenataion" }
    ]
  }
};
const data = {
  statistics: [
    {
      _id: "65fd91b0f581e473b56471c1",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 6,
      activeUsers: 5,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 4,
      totalRooms: 6,
      totalChannels: 3,
      userLanguages: { none: 6 },
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 1,
      totalLivechatAgents: 1,
      totalLivechatManagers: 1,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      departments: 0,
      archivedDepartments: 0,
      chatsOnHold: 0,
      voipCalls: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      totalTriggers: 0,
      totalChannelMessages: 5,
      voipExtensions: 0,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalDirectMessages: 15,
      BusinessHours: { total: 1, strategy: "" },
      totalCustomFields: 0,
      totalLivechatMessages: 0,
      totalMessages: 20,
      emailInboxes: 0,
      voipOnHoldCalls: 0,
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      lastLogin: "Fri Mar 22 2024 13:45:40 GMT+0000 (Coordinated Universal Time)",
      omnichannelSources: [],
      lastMessageSentAt: "2024-03-22T12:58:10.314Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Fri Mar 22 2024 13:40:59 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 319567157e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 507453440,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 14045370, nice: 6410, sys: 2287130, idle: 3164135160, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 14463450, nice: 7140, sys: 2307120, idle: 316461e4, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 3195325333623481e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 21,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 7, time: 25617 }],
            count: 1,
            sessions: 7,
            time: 25617
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 21,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 203, time: 759784 }],
            count: 1,
            sessions: 203,
            time: 759784
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 21,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 78, time: 418665 }],
            count: 1,
            sessions: 78,
            time: 418665
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 21,
        data: [{ count: 7, time: 25617, type: "browser", name: "Chrome", version: "122.0.0" }]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 21,
        data: [
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 61, time: 77661, type: "", name: "Chrome", version: "122.0.0" },
          { count: 11, time: 46042, type: "browser", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 21,
        data: [
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 144, time: 189171, type: "", name: "Chrome", version: "122.0.0" },
          { count: 25, time: 131091, type: "", name: "Chrome", version: "121.0.0" },
          { count: 17, time: 98518, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 11, time: 46042, type: "browser", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 21,
        data: [{ count: 7, time: 25617, name: "Windows", version: "10" }]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 21,
        data: [
          { count: 6, time: 294962, name: "", version: "" },
          { count: 61, time: 77661, name: "Mac OS", version: "10.15.7" },
          { count: 11, time: 46042, name: "Windows", version: "10" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 21,
        data: [
          { count: 169, time: 320262, name: "Mac OS", version: "10.15.7" },
          { count: 6, time: 294962, name: "", version: "" },
          { count: 28, time: 144560, name: "Windows", version: "10" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 5,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 29,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 2,
      maxMonthlyPeakConnections: 2,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-22T14:12:00.266Z",
      _updatedAt: "2024-03-22T14:12:00.267Z"
    },
    {
      _id: "66057ab0f581e473b564730f",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: true
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 7,
      activeUsers: 6,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 5,
      userLanguages: { none: 7 },
      totalRooms: 6,
      totalChannels: 3,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 1,
      totalLivechatAgents: 1,
      totalLivechatManagers: 1,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      onHoldEnabled: false,
      lastChattedAgentPreferred: false,
      assignNewConversationsToContactManager: true,
      visitorAbandonment: "none",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      archivedDepartments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 6,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 18,
      totalLivechatMessages: 0,
      totalMessages: 24,
      lastLogin: "Thu Mar 28 2024 13:51:08 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-26T17:40:18.321Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Tue Mar 26 2024 07:50:05 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 371407155e-2,
        loadavg: [0.01, 0.01, 0],
        totalmem: 4110323712,
        freemem: 552538112,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 16275860, nice: 7410, sys: 2654430, idle: 3677342950, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 16774150, nice: 7610, sys: 2678690, idle: 3677863100, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 3713725307644639e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 27,
        data: [
          {
            roles: [
              { role: "user", count: 1, sessions: 2, time: 87497 },
              { role: "admin", count: 2, sessions: 103, time: 116112 }
            ],
            count: 3,
            sessions: 105,
            time: 203609
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 27,
        data: [
          {
            roles: [
              { role: "admin", count: 2, sessions: 226, time: 486582 },
              { role: "user", count: 3, sessions: 7, time: 255014 }
            ],
            count: 5,
            sessions: 233,
            time: 741596
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 27,
        data: [
          { count: 199, time: 346502, type: "", name: "Chrome", version: "122.0.0" },
          { count: 20, time: 199686, type: "browser", name: "Chrome", version: "123.0.0" },
          { count: 13, time: 151652, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 1, time: 43756, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 27,
        data: [
          { count: 33, time: 351338, name: "Windows", version: "10" },
          { count: 199, time: 346502, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 43756, name: "", version: "" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 27,
        data: [
          {
            roles: [
              { role: "admin", count: 2, sessions: 380, time: 991140 },
              { role: "user", count: 3, sessions: 7, time: 255014 }
            ],
            count: 5,
            sessions: 387,
            time: 1246154
          }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 27,
        data: [
          { count: 343, time: 535673, type: "", name: "Chrome", version: "122.0.0" },
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 20, time: 199686, type: "browser", name: "Chrome", version: "123.0.0" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 1, time: 43756, type: "other", name: "", version: "" }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 27,
        data: [
          { count: 95, time: 81452, type: "", name: "Chrome", version: "122.0.0" },
          { count: 9, time: 78401, type: "browser", name: "Chrome", version: "123.0.0" },
          { count: 1, time: 43756, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 27,
        data: [
          { count: 95, time: 81452, name: "Mac OS", version: "10.15.7" },
          { count: 9, time: 78401, name: "Windows", version: "10" },
          { count: 1, time: 43756, name: "", version: "" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 27,
        data: [
          { count: 343, time: 535673, name: "Mac OS", version: "10.15.7" },
          { count: 37, time: 371763, name: "Windows", version: "10" },
          { count: 7, time: 338718, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncRoles: false,
          syncRolesAutoRemove: false,
          syncData: false,
          syncChannels: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {
            enabled: false,
            interval: "every_24_hours",
            newUsers: true,
            existingUsers: true
          },
          ee: { syncActiveState: "disable", syncTeams: false, syncRoles: false }
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false,
          syncRoles: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "", dms: true, channels: true, groups: true, teams: true }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      totalOTRRooms: 0,
      totalOTR: 0,
      enterprise: {
        modules: [
          "canned-responses",
          "ldap-enterprise",
          "livechat-enterprise",
          "voip-enterprise",
          "omnichannel-mobile-enterprise",
          "engagement-dashboard",
          "push-privacy",
          "teams-mention",
          "saml-enterprise",
          "oauth-enterprise",
          "federation",
          "videoconference-enterprise",
          "message-read-receipt",
          "outlook-calendar",
          "auditing",
          "scalability",
          "device-management",
          "hide-watermark",
          "custom-roles",
          "accessibility-certification"
        ],
        tags: ["Enterprise"],
        seatRequests: 0,
        slas: 0,
        cannedResponses: 0,
        livechatTags: 0,
        omnichannelRoomsWithPriorities: 0,
        omnichannelPdfTranscriptSucceeded: 0,
        livechatMonitors: 0,
        omnichannelPdfTranscriptRequested: 0,
        omnichannelRoomsWithSlas: 0,
        businessUnits: 0
      },
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 1,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 6,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 11,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 30,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 3,
      maxMonthlyPeakConnections: 4,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: 100,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-28T14:12:00.220Z",
      _updatedAt: "2024-03-28T14:12:00.220Z"
    },
    {
      _id: "65e879b0f581e473b56470e2",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      totalRooms: 4,
      userLanguages: { none: 5 },
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      archivedDepartments: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipExtensions: 0,
      voipCalls: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalTriggers: 0,
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 6,
      totalLivechatMessages: 0,
      totalMessages: 10,
      lastLogin: "Tue Feb 27 2024 18:09:41 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-29T02:00:02.780Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 181327155e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 472895488,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 7822e3, nice: 4500, sys: 1297980, idle: 1795572820, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 8068870, nice: 5120, sys: 1312200, idle: 1795846140, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 1812925314926702e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      uploadsTotalSize: 0,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: { year: 2024, month: 3, day: 5, data: [] },
      uniqueUsersOfLastWeek: { year: 2024, month: 3, day: 5, data: [] },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 5,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 117, time: 623781 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 120,
            time: 784662
          }
        ]
      },
      uniqueOSOfYesterday: { year: 2024, month: 3, day: 5, data: [] },
      uniqueDevicesOfLastWeek: { year: 2024, month: 3, day: 5, data: [] },
      uniqueOSOfLastWeek: { year: 2024, month: 3, day: 5, data: [] },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 5,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 74, time: 297765, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 5,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueDevicesOfYesterday: { year: 2024, month: 3, day: 5, data: [] },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 4,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-06T14:12:00.250Z",
      _updatedAt: "2024-03-06T14:12:00.250Z"
    },
    {
      _id: "65f84bb0f581e473b564718c",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      totalTriggers: 0,
      archivedDepartments: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 9,
      totalLivechatMessages: 0,
      totalMessages: 13,
      lastLogin: "Mon Mar 18 2024 10:30:48 GMT+0000 (Coordinated Universal Time)",
      federatedServers: 0,
      federatedUsers: 0,
      lastMessageSentAt: "2024-03-07T02:00:01.784Z",
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 285007158e-2,
        loadavg: [0.36, 0.17, 0.06],
        totalmem: 4110323712,
        freemem: 588681216,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 12486e3, nice: 5850, sys: 2038600, idle: 2821987010, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 12835890, nice: 6700, sys: 2053620, idle: 2822429840, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 2849725339901139e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 17,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 13, time: 25513 }],
            count: 1,
            sessions: 13,
            time: 25513
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 17,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 136, time: 223681 }],
            count: 1,
            sessions: 136,
            time: 223681
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 17,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 216, time: 571216 },
              { role: "user", count: 1, sessions: 1, time: 45292 }
            ],
            count: 2,
            sessions: 217,
            time: 616508
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 17,
        data: [{ count: 13, time: 25513, type: "", name: "Chrome", version: "122.0.0" }]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 17,
        data: [
          { count: 135, time: 185660, type: "", name: "Chrome", version: "122.0.0" },
          { count: 1, time: 38021, type: "wearable", name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 17,
        data: [
          { count: 30, time: 204574, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 140, time: 188808, type: "", name: "Chrome", version: "122.0.0" },
          { count: 46, time: 185105, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 38021, type: "wearable", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 17,
        data: [{ count: 13, time: 25513, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 17,
        data: [
          { count: 186, time: 373913, name: "Mac OS", version: "10.15.7" },
          { count: 30, time: 204574, name: "Windows", version: "10" },
          { count: 1, time: 38021, name: "", version: "" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 17,
        data: [
          { count: 135, time: 185660, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 38021, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 28,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 1,
      maxMonthlyPeakConnections: 2,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-18T14:12:00.301Z",
      _updatedAt: "2024-03-18T14:12:00.301Z"
    },
    {
      _id: "65edbfb0f581e473b56470ef",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      totalTriggers: 0,
      archivedDepartments: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipSuccessfulCalls: 0,
      voipExtensions: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 9,
      totalLivechatMessages: 0,
      totalMessages: 13,
      lastLogin: "Fri Mar 08 2024 14:33:13 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-07T02:00:01.784Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 215887156e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 526057472,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 9393940, nice: 4960, sys: 1537400, idle: 2137696650, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 9684410, nice: 5600, sys: 1551740, idle: 2138021950, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 2158525325020757e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: { year: 2024, month: 3, day: 9, data: [] },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 9,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 5, time: 3148 }],
            count: 1,
            sessions: 5,
            time: 3148
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 9,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 122, time: 626929 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 125,
            time: 787810
          }
        ]
      },
      uniqueDevicesOfYesterday: { year: 2024, month: 3, day: 9, data: [] },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 9,
        data: [{ count: 5, time: 3148, type: "", name: "Chrome", version: "122.0.0" }]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 9,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" },
          { count: 5, time: 3148, type: "", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 9,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 79, time: 300913, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: { year: 2024, month: 3, day: 9, data: [] },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 9,
        data: [{ count: 5, time: 3148, name: "Mac OS", version: "10.15.7" }]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 27,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-10T14:12:00.263Z",
      _updatedAt: "2024-03-10T14:12:00.264Z"
    },
    {
      _id: "65e333b0f581e473b56470de",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      totalTriggers: 0,
      archivedDepartments: 0,
      departments: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 6,
      totalLivechatMessages: 0,
      totalMessages: 10,
      lastLogin: "Tue Feb 27 2024 18:09:41 GMT+0000 (Coordinated Universal Time)",
      federatedServers: 0,
      federatedUsers: 0,
      lastMessageSentAt: "2024-02-29T02:00:02.780Z",
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 146767155e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 575520768,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 6394720, nice: 4280, sys: 1072720, idle: 1453300990, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 6595190, nice: 4340, sys: 1082470, idle: 1453519e3, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 1467325308622105e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueDevicesOfYesterday: { year: 2024, month: 3, day: 1, data: [] },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 1,
        data: [
          { count: 16, time: 114833, type: "", name: "Chrome", version: "121.0.0" },
          { count: 9, time: 27553, type: "browser", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 1,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 25, time: 142386 }],
            count: 1,
            sessions: 25,
            time: 142386
          }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 1,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: { year: 2024, month: 3, day: 1, data: [] },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 1,
        data: [
          { count: 16, time: 114833, name: "Mac OS", version: "10.15.7" },
          { count: 9, time: 27553, name: "Windows", version: "10" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 1,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 74, time: 297765, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 1,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 117, time: 623781 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 120,
            time: 784662
          }
        ]
      },
      uniqueUsersOfYesterday: { year: 2024, month: 3, day: 1, data: [] },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 3,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-02T14:12:00.220Z",
      _updatedAt: "2024-03-02T14:12:00.221Z"
    },
    {
      _id: "6602d7b0f581e473b5647230",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: true
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 6,
      activeUsers: 5,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 4,
      totalRooms: 6,
      userLanguages: { none: 6 },
      totalChannels: 3,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 1,
      totalLivechatAgents: 1,
      totalLivechatManagers: 1,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      onHoldEnabled: false,
      lastChattedAgentPreferred: false,
      assignNewConversationsToContactManager: true,
      visitorAbandonment: "none",
      voipEnabled: false,
      omnichannelSources: [],
      emailInboxes: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      BusinessHours: { total: 1, strategy: "" },
      archivedDepartments: 0,
      departments: 0,
      voipCalls: 0,
      chatsOnHold: 0,
      voipExtensions: 0,
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 5,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 18,
      totalLivechatMessages: 0,
      totalMessages: 23,
      lastLogin: "Tue Mar 26 2024 14:04:22 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-26T02:00:02.590Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Tue Mar 26 2024 07:50:05 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 354127156e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 604692480,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 15500800, nice: 7030, sys: 2526560, idle: 3506316060, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 15977150, nice: 7490, sys: 2550460, idle: 3506821010, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 3540925316386503e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 25,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 29, time: 37101 }],
            count: 1,
            sessions: 29,
            time: 37101
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 25,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 89, time: 188828 },
              { role: "user", count: 2, sessions: 2, time: 76538 }
            ],
            count: 3,
            sessions: 91,
            time: 265366
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 25,
        data: [
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 74, time: 93289, type: "", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 25,
        data: [
          { count: 17, time: 172077, name: "Windows", version: "10" },
          { count: 74, time: 93289, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 25,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 255, time: 716059 },
              { role: "user", count: 2, sessions: 2, time: 76538 }
            ],
            count: 3,
            sessions: 257,
            time: 792597
          }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 25,
        data: [{ count: 29, time: 37101, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 25,
        data: [
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 218, time: 282460, type: "", name: "Chrome", version: "122.0.0" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 15, time: 41504, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 1594, type: "browser", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 25,
        data: [{ count: 29, time: 37101, type: "", name: "Chrome", version: "122.0.0" }]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 25,
        data: [
          { count: 233, time: 323964, name: "Mac OS", version: "10.15.7" },
          { count: 6, time: 294962, name: "", version: "" },
          { count: 18, time: 173671, name: "Windows", version: "10" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncRoles: false,
          syncRolesAutoRemove: false,
          syncData: false,
          syncChannels: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {
            enabled: false,
            interval: "every_24_hours",
            newUsers: true,
            existingUsers: true
          },
          ee: { syncActiveState: "disable", syncTeams: false, syncRoles: false }
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false,
          syncRoles: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "", dms: true, channels: true, groups: true, teams: true }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      enterprise: {
        modules: [
          "canned-responses",
          "ldap-enterprise",
          "livechat-enterprise",
          "voip-enterprise",
          "omnichannel-mobile-enterprise",
          "engagement-dashboard",
          "push-privacy",
          "teams-mention",
          "saml-enterprise",
          "oauth-enterprise",
          "federation",
          "videoconference-enterprise",
          "message-read-receipt",
          "outlook-calendar"
        ],
        tags: ["Starter"],
        seatRequests: 0,
        slas: 0,
        cannedResponses: 0,
        livechatTags: 0,
        omnichannelRoomsWithPriorities: 0,
        livechatMonitors: 0,
        omnichannelPdfTranscriptSucceeded: 0,
        businessUnits: 0,
        omnichannelPdfTranscriptRequested: 0,
        omnichannelRoomsWithSlas: 0
      },
      totalRoomsWithStarred: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 5,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 9,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 29,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 2,
      maxMonthlyPeakConnections: 2,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: 100,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-26T14:12:00.248Z",
      _updatedAt: "2024-03-26T14:12:00.248Z"
    },
    {
      _id: "65d8a7b0f581e473b56470b8",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      totalRooms: 4,
      userLanguages: { none: 5 },
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      totalTriggers: 0,
      archivedDepartments: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipSuccessfulCalls: 0,
      voipOnHoldCalls: 0,
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      voipErrorCalls: 0,
      voipExtensions: 0,
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 3,
      totalLivechatMessages: 0,
      totalMessages: 7,
      lastLogin: "Fri Feb 23 2024 12:24:52 GMT+0000 (Coordinated Universal Time)",
      federatedServers: 0,
      federatedUsers: 0,
      lastMessageSentAt: "2024-02-21T02:00:02.085Z",
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 776471.58,
        loadavg: [0.02, 0.01, 0],
        totalmem: 4110323712,
        freemem: 570564608,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 3359450, nice: 3570, sys: 586350, idle: 768858670, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 3462780, nice: 3130, sys: 586840, idle: 768988920, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 776125.340216819 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      uploadsTotalSize: 0,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 22,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 84, time: 439767 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 87,
            time: 600648
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 22,
        data: [
          { count: 23, time: 176676, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 30, time: 76134, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 2,
        day: 22,
        data: [
          { count: 6, time: 34826, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 3, time: 10769, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 22,
        data: [
          { count: 34, time: 392287, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 52, time: 177443, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 2,
        day: 22,
        data: [
          { count: 6, time: 34826, name: "Windows", version: "10" },
          { count: 3, time: 10769, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 22,
        data: [
          { count: 23, time: 176676, name: "Windows", version: "10" },
          { count: 30, time: 76134, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 22,
        data: [
          { count: 34, time: 392287, name: "Windows", version: "10" },
          { count: 52, time: 177443, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 22,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 52, time: 207518 },
              { role: "user", count: 1, sessions: 1, time: 45292 }
            ],
            count: 2,
            sessions: 53,
            time: 252810
          }
        ]
      },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 2,
        day: 22,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 9, time: 45595 }],
            count: 1,
            sessions: 9,
            time: 45595
          }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 3,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 2,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-23T14:12:00.258Z",
      _updatedAt: "2024-02-23T14:12:00.258Z"
    },
    {
      _id: "66096f30f581e473b5647348",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: true
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 7,
      activeUsers: 6,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 6,
      userLanguages: { none: 7 },
      totalRooms: 6,
      totalChannels: 3,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 1,
      totalLivechatAgents: 1,
      totalLivechatManagers: 1,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      onHoldEnabled: false,
      lastChattedAgentPreferred: false,
      assignNewConversationsToContactManager: true,
      visitorAbandonment: "none",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      archivedDepartments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipErrorCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      voipOnHoldCalls: 0,
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 6,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 18,
      totalLivechatMessages: 0,
      totalMessages: 24,
      lastLogin: "Sun Mar 31 2024 13:59:04 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-26T17:40:18.321Z",
      lastSeenSubscription: "Tue Mar 26 2024 07:50:05 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 397327157e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 513130496,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 17398820, nice: 7670, sys: 2837500, idle: 3933947020, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 17918090, nice: 8110, sys: 2861820, idle: 3934511600, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 3972925327943801e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      federatedServers: 0,
      federatedUsers: 0,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 30,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 13, time: 1504 }],
            count: 1,
            sessions: 13,
            time: 1504
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 30,
        data: [
          {
            roles: [
              { role: "admin", count: 2, sessions: 297, time: 433343 },
              { role: "user", count: 2, sessions: 6, time: 227894 }
            ],
            count: 4,
            sessions: 303,
            time: 661237
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 30,
        data: [
          {
            roles: [
              { role: "admin", count: 2, sessions: 507, time: 1069203 },
              { role: "user", count: 3, sessions: 8, time: 304432 }
            ],
            count: 5,
            sessions: 515,
            time: 1373635
          }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 30,
        data: [
          { count: 469, time: 603610, type: "", name: "Chrome", version: "122.0.0" },
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 22, time: 259230, type: "browser", name: "Chrome", version: "123.0.0" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 1, time: 43756, type: "other", name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 30,
        data: [
          { count: 280, time: 358251, type: "", name: "Chrome", version: "122.0.0" },
          { count: 22, time: 259230, type: "browser", name: "Chrome", version: "123.0.0" },
          { count: 1, time: 43756, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 30,
        data: [{ count: 13, time: 1504, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 30,
        data: [
          { count: 469, time: 603610, name: "Mac OS", version: "10.15.7" },
          { count: 39, time: 431307, name: "Windows", version: "10" },
          { count: 7, time: 338718, name: "", version: "" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 30,
        data: [
          { count: 280, time: 358251, name: "Mac OS", version: "10.15.7" },
          { count: 22, time: 259230, name: "Windows", version: "10" },
          { count: 1, time: 43756, name: "", version: "" }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 30,
        data: [{ count: 13, time: 1504, type: "", name: "Chrome", version: "122.0.0" }]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncRoles: false,
          syncRolesAutoRemove: false,
          syncData: false,
          syncChannels: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {
            enabled: false,
            interval: "every_24_hours",
            newUsers: true,
            existingUsers: true
          },
          ee: { syncActiveState: "disable", syncTeams: false, syncRoles: false }
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false,
          syncRoles: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "", dms: true, channels: true, groups: true, teams: true }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      pushQueue: 0,
      totalOTRRooms: 0,
      totalOTR: 0,
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      enterprise: {
        modules: [
          "canned-responses",
          "ldap-enterprise",
          "livechat-enterprise",
          "voip-enterprise",
          "omnichannel-mobile-enterprise",
          "engagement-dashboard",
          "push-privacy",
          "teams-mention",
          "saml-enterprise",
          "oauth-enterprise",
          "federation",
          "videoconference-enterprise",
          "message-read-receipt",
          "outlook-calendar",
          "auditing",
          "scalability",
          "device-management",
          "hide-watermark",
          "custom-roles",
          "accessibility-certification"
        ],
        tags: ["Enterprise"],
        seatRequests: 0,
        cannedResponses: 0,
        livechatTags: 0,
        slas: 0,
        omnichannelRoomsWithPriorities: 0,
        omnichannelRoomsWithSlas: 0,
        livechatMonitors: 0,
        omnichannelPdfTranscriptRequested: 0,
        omnichannelPdfTranscriptSucceeded: 0,
        businessUnits: 0
      },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 1,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 6,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 11,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 30,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 2,
      maxMonthlyPeakConnections: 4,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: 100,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-31T14:12:00.281Z",
      _updatedAt: "2024-03-31T14:12:00.281Z"
    },
    {
      _id: "65db4ab0f581e473b56470c4",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      totalRooms: 4,
      userLanguages: { none: 5 },
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      archivedDepartments: 0,
      emailInboxes: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipOnHoldCalls: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      departments: 0,
      omnichannelSources: [],
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 3,
      totalLivechatMessages: 0,
      totalMessages: 7,
      lastLogin: "Sun Feb 25 2024 13:50:58 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-21T02:00:02.085Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 949271.56,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 466202624,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 4118320, nice: 3760, sys: 709640, idle: 939978150, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 4268650, nice: 3440, sys: 715480, idle: 940108400, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 948925.324276949 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 2,
        day: 24,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 6, time: 17542 }],
            count: 1,
            sessions: 6,
            time: 17542
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 24,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 56, time: 219543 },
              { role: "user", count: 1, sessions: 1, time: 45292 }
            ],
            count: 2,
            sessions: 57,
            time: 264835
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 24,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 98, time: 498937 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 101,
            time: 659818
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 2,
        day: 24,
        data: [{ count: 6, time: 17542, type: "browser", name: "Chrome", version: "121.0.0" }]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 24,
        data: [
          { count: 27, time: 194563, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 30, time: 70272, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 2,
        day: 24,
        data: [{ count: 6, time: 17542, name: "Windows", version: "10" }]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 24,
        data: [
          { count: 42, time: 445968, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 58, time: 182932, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 24,
        data: [
          { count: 27, time: 194563, name: "Windows", version: "10" },
          { count: 30, time: 70272, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 24,
        data: [
          { count: 42, time: 445968, name: "Windows", version: "10" },
          { count: 58, time: 182932, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 3,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 2,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-25T14:12:00.243Z",
      _updatedAt: "2024-02-25T14:12:00.243Z"
    },
    {
      _id: "65f5a8b0f581e473b5647174",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      totalRooms: 4,
      userLanguages: { none: 5 },
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      archivedDepartments: 0,
      departments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipExtensions: 0,
      voipCalls: 0,
      voipSuccessfulCalls: 0,
      voipOnHoldCalls: 0,
      voipErrorCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 9,
      totalLivechatMessages: 0,
      totalMessages: 13,
      lastLogin: "Fri Mar 15 2024 20:09:37 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-07T02:00:01.784Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 267727157e-2,
        loadavg: [0.08, 0.04, 0.01],
        totalmem: 4110323712,
        freemem: 511438848,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 11717450, nice: 5540, sys: 1915440, idle: 2650904320, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 12062980, nice: 6520, sys: 1930730, idle: 2651305920, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 2676925325777787e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 15,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 123, time: 198168 }],
            count: 1,
            sessions: 123,
            time: 198168
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 15,
        data: [
          { count: 44, time: 51785, type: "", name: "Chrome", version: "122.0.0" },
          { count: 1, time: 38021, type: "wearable", name: "", version: "" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 15,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 213, time: 592848 },
              { role: "user", count: 1, sessions: 1, time: 45292 }
            ],
            count: 2,
            sessions: 214,
            time: 638140
          }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 15,
        data: [
          { count: 44, time: 51785, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 38021, name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 15,
        data: [
          { count: 34, time: 240368, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 52, time: 196456, type: "", name: "Chrome", version: "121.0.0" },
          { count: 127, time: 163295, type: "", name: "Chrome", version: "122.0.0" },
          { count: 1, time: 38021, type: "wearable", name: "", version: "" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 15,
        data: [
          { count: 122, time: 160147, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 38021, name: "", version: "" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 15,
        data: [
          { count: 179, time: 359751, name: "Mac OS", version: "10.15.7" },
          { count: 34, time: 240368, name: "Windows", version: "10" },
          { count: 1, time: 38021, name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 15,
        data: [
          { count: 122, time: 160147, type: "", name: "Chrome", version: "122.0.0" },
          { count: 1, time: 38021, type: "wearable", name: "", version: "" }
        ]
      },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 15,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 45, time: 89806 }],
            count: 1,
            sessions: 45,
            time: 89806
          }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 28,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 1,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-16T14:12:00.243Z",
      _updatedAt: "2024-03-16T14:12:00.244Z"
    },
    {
      _id: "65f062b0f581e473b56470fd",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      totalTriggers: 0,
      archivedDepartments: 0,
      departments: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      totalCustomFields: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 9,
      totalLivechatMessages: 0,
      totalMessages: 13,
      lastLogin: "Tue Mar 12 2024 13:53:52 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-07T02:00:01.784Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 233167157e-2,
        loadavg: [0, 0.01, 0],
        totalmem: 4110323712,
        freemem: 503529472,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 10142020, nice: 5230, sys: 1658050, idle: 2308794370, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 10432200, nice: 5830, sys: 1672160, idle: 2309169110, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 2331325331330325e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 11,
        data: [{ count: 9, time: 25238, type: "", name: "Chrome", version: "122.0.0" }]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 11,
        data: [{ count: 14, time: 28386, type: "", name: "Chrome", version: "122.0.0" }]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 11,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 14, time: 28386 }],
            count: 1,
            sessions: 14,
            time: 28386
          }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 11,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" },
          { count: 14, time: 28386, type: "", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 11,
        data: [{ count: 14, time: 28386, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 11,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 88, time: 326151, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 11,
        data: [{ count: 9, time: 25238, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 11,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 131, time: 652167 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 134,
            time: 813048
          }
        ]
      },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 11,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 9, time: 25238 }],
            count: 1,
            sessions: 9,
            time: 25238
          }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 27,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 1,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-12T14:12:00.265Z",
      _updatedAt: "2024-03-12T14:12:00.265Z"
    },
    {
      _id: "65e090b0f581e473b56470dc",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      archivedDepartments: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipOnHoldCalls: 0,
      voipErrorCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 6,
      totalLivechatMessages: 0,
      totalMessages: 10,
      lastLogin: "Tue Feb 27 2024 18:09:41 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-29T02:00:02.780Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 129487155e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 478584832,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 5636540, nice: 4100, sys: 952780, idle: 1282196890, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 5808690, nice: 4040, sys: 961490, idle: 1282393270, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 1294525308293806e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      uploadsTotalSize: 0,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: { year: 2024, month: 2, day: 28, data: [] },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 28,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 117, time: 623781 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 120,
            time: 784662
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 28,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 42, time: 229609 }],
            count: 1,
            sessions: 42,
            time: 229609
          }
        ]
      },
      uniqueDevicesOfYesterday: { year: 2024, month: 2, day: 28, data: [] },
      uniqueOSOfYesterday: { year: 2024, month: 2, day: 28, data: [] },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 28,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 28,
        data: [
          { count: 25, time: 131091, type: "", name: "Chrome", version: "121.0.0" },
          { count: 17, time: 98518, type: "browser", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 28,
        data: [
          { count: 25, time: 131091, name: "Mac OS", version: "10.15.7" },
          { count: 17, time: 98518, name: "Windows", version: "10" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 28,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 74, time: 297765, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 3,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-29T14:12:00.224Z",
      _updatedAt: "2024-02-29T14:12:00.224Z"
    },
    {
      _id: "65faeeb0f581e473b5647192",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      archivedDepartments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 12,
      totalLivechatMessages: 0,
      totalMessages: 16,
      lastLogin: "Wed Mar 20 2024 09:50:09 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-20T02:00:15.082Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Mar 20 2024 09:50:34 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 302287158e-2,
        loadavg: [0.22, 0.05, 0.01],
        totalmem: 4110323712,
        freemem: 494981120,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 13299920, nice: 6160, sys: 2167440, idle: 2993040160, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 13688200, nice: 6890, sys: 2184390, idle: 2993494550, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 3022525338672134e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: { year: 2024, month: 3, day: 19, data: [] },
      uniqueDevicesOfYesterday: { year: 2024, month: 3, day: 19, data: [] },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 19,
        data: [
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 91, time: 123711, type: "", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 19,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 97, time: 418673 }],
            count: 1,
            sessions: 97,
            time: 418673
          }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 19,
        data: [
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 30, time: 204574, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 144, time: 189171, type: "", name: "Chrome", version: "122.0.0" },
          { count: 44, time: 178247, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueOSOfYesterday: { year: 2024, month: 3, day: 19, data: [] },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 19,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 223, time: 821662 },
              { role: "user", count: 1, sessions: 1, time: 45292 }
            ],
            count: 2,
            sessions: 224,
            time: 866954
          }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 19,
        data: [
          { count: 6, time: 294962, name: "", version: "" },
          { count: 91, time: 123711, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 19,
        data: [
          { count: 188, time: 367418, name: "Mac OS", version: "10.15.7" },
          { count: 6, time: 294962, name: "", version: "" },
          { count: 30, time: 204574, name: "Windows", version: "10" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 28,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 1,
      maxMonthlyPeakConnections: 2,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-20T14:12:00.271Z",
      _updatedAt: "2024-03-20T14:12:00.272Z"
    },
    {
      _id: "65d604b0f581e473b564709d",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      archivedDepartments: 0,
      totalCustomFields: 0,
      totalTriggers: 0,
      emailInboxes: 0,
      departments: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipExtensions: 0,
      voipCalls: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 3,
      totalLivechatMessages: 0,
      totalMessages: 7,
      lastLogin: "Wed Feb 21 2024 13:28:21 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-21T02:00:02.085Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 603671.56,
        loadavg: [0.05, 0.03, 0],
        totalmem: 4110323712,
        freemem: 459771904,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 2601160, nice: 3390, sys: 456370, idle: 597779220, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 2691090, nice: 2820, sys: 457020, idle: 597863860, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 603325.316317709 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 2,
        day: 20,
        data: [
          {
            roles: [
              { role: "user", count: 1, sessions: 1, time: 45292 },
              { role: "admin", count: 1, sessions: 9, time: 38555 }
            ],
            count: 2,
            sessions: 10,
            time: 83847
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 20,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 53, time: 324807 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 56,
            time: 485688
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 20,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 53, time: 324807 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 56,
            time: 485688
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 2,
        day: 20,
        data: [
          { count: 5, time: 64723, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 5, time: 19124, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 20,
        data: [
          { count: 20, time: 316128, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 35, time: 138642, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 20,
        data: [
          { count: 20, time: 316128, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 35, time: 138642, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 2,
        day: 20,
        data: [
          { count: 5, time: 64723, name: "Windows", version: "10" },
          { count: 5, time: 19124, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 20,
        data: [
          { count: 20, time: 316128, name: "Windows", version: "10" },
          { count: 35, time: 138642, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 20,
        data: [
          { count: 20, time: 316128, name: "Windows", version: "10" },
          { count: 35, time: 138642, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 2,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 2,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-21T14:12:00.218Z",
      _updatedAt: "2024-02-21T14:12:00.218Z"
    },
    {
      _id: "660034b0f581e473b56471e0",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 6,
      activeUsers: 5,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 5,
      totalRooms: 6,
      userLanguages: { none: 6 },
      totalChannels: 3,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 1,
      totalLivechatAgents: 1,
      totalLivechatManagers: 1,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      archivedDepartments: 0,
      totalCustomFields: 0,
      totalTriggers: 0,
      emailInboxes: 0,
      departments: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipSuccessfulCalls: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 5,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 15,
      totalLivechatMessages: 0,
      totalMessages: 20,
      lastLogin: "Fri Mar 22 2024 17:48:38 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-22T12:58:10.314Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Fri Mar 22 2024 13:40:59 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 336847156e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 501682176,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 14765130, nice: 6670, sys: 2404120, idle: 3335240500, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 15204340, nice: 7330, sys: 2425340, idle: 3335739600, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 3368125315638011e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 23,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 82, time: 434544 },
              { role: "user", count: 2, sessions: 2, time: 76538 }
            ],
            count: 3,
            sessions: 84,
            time: 511082
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 23,
        data: [
          { count: 5, time: 256941, type: "wearable", name: "", version: "" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 62, time: 82064, type: "", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueDevicesOfYesterday: { year: 2024, month: 3, day: 23, data: [] },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 23,
        data: [
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 189, time: 245359, type: "", name: "Chrome", version: "122.0.0" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 16, time: 114833, type: "", name: "Chrome", version: "121.0.0" },
          { count: 9, time: 27553, type: "browser", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueOSOfYesterday: { year: 2024, month: 3, day: 23, data: [] },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 23,
        data: [
          { count: 5, time: 256941, name: "", version: "" },
          { count: 17, time: 172077, name: "Windows", version: "10" },
          { count: 62, time: 82064, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 23,
        data: [
          { count: 205, time: 360192, name: "Mac OS", version: "10.15.7" },
          { count: 6, time: 294962, name: "", version: "" },
          { count: 26, time: 199630, name: "Windows", version: "10" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 23,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 235, time: 778246 },
              { role: "user", count: 2, sessions: 2, time: 76538 }
            ],
            count: 3,
            sessions: 237,
            time: 854784
          }
        ]
      },
      uniqueUsersOfYesterday: { year: 2024, month: 3, day: 23, data: [] },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 5,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 29,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 2,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-24T14:12:00.251Z",
      _updatedAt: "2024-03-24T14:12:00.251Z"
    },
    {
      _id: "65e5d6b0f581e473b56470e0",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      archivedDepartments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      voipCalls: 0,
      chatsOnHold: 0,
      departments: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 6,
      totalLivechatMessages: 0,
      totalMessages: 10,
      lastLogin: "Tue Feb 27 2024 18:09:41 GMT+0000 (Coordinated Universal Time)",
      federatedServers: 0,
      federatedUsers: 0,
      lastMessageSentAt: "2024-02-29T02:00:02.780Z",
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 164047156e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 521256960,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 7097630, nice: 4360, sys: 1184250, idle: 1624448060, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 7327220, nice: 4760, sys: 1197230, idle: 1624686660, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 164012531863003e-8 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: { year: 2024, month: 3, day: 3, data: [] },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 3,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 16, time: 43098 }],
            count: 1,
            sessions: 16,
            time: 43098
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 3,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 117, time: 623781 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 120,
            time: 784662
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 3,
        data: [
          { count: 15, time: 41504, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 1594, type: "browser", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueDevicesOfYesterday: { year: 2024, month: 3, day: 3, data: [] },
      uniqueOSOfYesterday: { year: 2024, month: 3, day: 3, data: [] },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 3,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 3,
        data: [
          { count: 15, time: 41504, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 1594, name: "Windows", version: "10" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 3,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 74, time: 297765, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 3,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-04T14:12:00.243Z",
      _updatedAt: "2024-03-04T14:12:00.244Z"
    },
    {
      _id: "66040d1cf581e473b5647254",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: true
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 7,
      activeUsers: 6,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 2,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 3,
      offlineUsers: 4,
      userLanguages: { none: 7 },
      totalRooms: 6,
      totalChannels: 3,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 1,
      totalLivechatAgents: 1,
      totalLivechatManagers: 1,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      onHoldEnabled: false,
      lastChattedAgentPreferred: false,
      assignNewConversationsToContactManager: true,
      visitorAbandonment: "none",
      voipEnabled: false,
      omnichannelSources: [],
      totalTriggers: 0,
      archivedDepartments: 0,
      departments: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 6,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 18,
      totalLivechatMessages: 0,
      totalMessages: 24,
      lastLogin: "Wed Mar 27 2024 12:03:54 GMT+0000 (Coordinated Universal Time)",
      federatedServers: 0,
      federatedUsers: 0,
      lastMessageSentAt: "2024-03-26T17:40:18.321Z",
      lastSeenSubscription: "Tue Mar 26 2024 07:50:05 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 362048406e-2,
        loadavg: [0.01, 0, 0],
        totalmem: 4110323712,
        freemem: 579309568,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 15848540, nice: 7150, sys: 2583390, idle: 3584723660, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 16335230, nice: 7610, sys: 2605900, idle: 3585244790, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 3620137821628465e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          {
            roles: [
              { role: "user", count: 2, sessions: 3, time: 90979 },
              { role: "admin", count: 2, sessions: 38, time: 202067 }
            ],
            count: 4,
            sessions: 41,
            time: 293046
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 30, time: 171761, type: "", name: "Chrome", version: "122.0.0" },
          { count: 11, time: 121285, type: "browser", name: "Chrome", version: "123.0.0" }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          {
            roles: [
              { role: "admin", count: 2, sessions: 127, time: 390895 },
              { role: "user", count: 3, sessions: 5, time: 167517 }
            ],
            count: 5,
            sessions: 132,
            time: 558412
          }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 30, time: 171761, name: "Mac OS", version: "10.15.7" },
          { count: 11, time: 121285, name: "Windows", version: "10" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 248, time: 454221, type: "", name: "Chrome", version: "122.0.0" },
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 11, time: 121285, type: "browser", name: "Chrome", version: "123.0.0" },
          { count: 12, time: 40975, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 104, time: 265050, type: "", name: "Chrome", version: "122.0.0" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 11, time: 121285, type: "browser", name: "Chrome", version: "123.0.0" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 260, time: 495196, name: "Mac OS", version: "10.15.7" },
          { count: 6, time: 294962, name: "", version: "" },
          { count: 28, time: 293362, name: "Windows", version: "10" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          {
            roles: [
              { role: "admin", count: 2, sessions: 289, time: 916003 },
              { role: "user", count: 3, sessions: 5, time: 167517 }
            ],
            count: 5,
            sessions: 294,
            time: 1083520
          }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 28, time: 293362, name: "Windows", version: "10" },
          { count: 104, time: 265050, name: "Mac OS", version: "10.15.7" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncRoles: false,
          syncRolesAutoRemove: false,
          syncData: false,
          syncChannels: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {
            enabled: false,
            interval: "every_24_hours",
            newUsers: true,
            existingUsers: true
          },
          ee: { syncActiveState: "disable", syncTeams: false, syncRoles: false }
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false,
          syncRoles: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "", dms: true, channels: true, groups: true, teams: true }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      totalOTRRooms: 0,
      totalOTR: 0,
      enterprise: {
        modules: [
          "canned-responses",
          "ldap-enterprise",
          "livechat-enterprise",
          "voip-enterprise",
          "omnichannel-mobile-enterprise",
          "engagement-dashboard",
          "push-privacy",
          "teams-mention",
          "saml-enterprise",
          "oauth-enterprise",
          "federation",
          "videoconference-enterprise",
          "message-read-receipt",
          "outlook-calendar"
        ],
        tags: ["Starter"],
        seatRequests: 0,
        slas: 0,
        cannedResponses: 0,
        livechatTags: 0,
        omnichannelRoomsWithPriorities: 0,
        omnichannelRoomsWithSlas: 0,
        businessUnits: 0,
        livechatMonitors: 0,
        omnichannelPdfTranscriptRequested: 0,
        omnichannelPdfTranscriptSucceeded: 0
      },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 6,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 9,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 30,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 4,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: 100,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-27T12:12:12.737Z",
      _updatedAt: "2024-03-27T12:12:12.737Z"
    },
    {
      _id: "65d0beb0f581e473b564707a",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      totalRooms: 1,
      userLanguages: { none: 5 },
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 0,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      departments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      voipSuccessfulCalls: 0,
      voipOnHoldCalls: 0,
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      voipErrorCalls: 0,
      archivedDepartments: 0,
      omnichannelSources: [],
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 0,
      totalLivechatMessages: 0,
      totalMessages: 4,
      lastLogin: "Fri Feb 16 2024 20:58:57 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-15T07:50:10.346Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Thu Feb 15 2024 16:16:50 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 258071.55,
        loadavg: [0.04, 0.01, 0],
        totalmem: 4110323712,
        freemem: 465629184,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 1140040, nice: 2640, sys: 207320, idle: 255463060, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 1195110, nice: 2600, sys: 208560, idle: 255482930, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 257725.312016838 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotal: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 2,
        day: 16,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 10, time: 47145 }],
            count: 1,
            sessions: 10,
            time: 47145
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 2,
        day: 16,
        data: [
          { count: 4, time: 35794, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 6, time: 11351, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 16,
        data: [
          { count: 15, time: 251405, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 28, time: 112660, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 16,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 42, time: 279394 },
              { role: "user", count: 1, sessions: 2, time: 115589 }
            ],
            count: 4,
            sessions: 44,
            time: 394983
          }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 16,
        data: [
          { count: 15, time: 251405, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 28, time: 112660, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 2,
        day: 16,
        data: [
          { count: 4, time: 35794, name: "Windows", version: "10" },
          { count: 6, time: 11351, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 16,
        data: [
          { count: 15, time: 251405, name: "Windows", version: "10" },
          { count: 28, time: 112660, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 16,
        data: [
          { count: 15, time: 251405, name: "Windows", version: "10" },
          { count: 28, time: 112660, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 16,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 42, time: 279394 },
              { role: "user", count: 1, sessions: 2, time: 115589 }
            ],
            count: 4,
            sessions: 44,
            time: 394983
          }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      pushQueue: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 2,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 1,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-17T14:12:00.494Z",
      _updatedAt: "2024-02-17T14:12:00.503Z"
    },
    {
      _id: "66081db0f581e473b5647333",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: true
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 7,
      activeUsers: 6,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 6,
      totalRooms: 6,
      userLanguages: { none: 7 },
      totalChannels: 3,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 1,
      totalLivechatAgents: 1,
      totalLivechatManagers: 1,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      onHoldEnabled: false,
      lastChattedAgentPreferred: false,
      assignNewConversationsToContactManager: true,
      visitorAbandonment: "none",
      voipEnabled: false,
      omnichannelSources: [],
      archivedDepartments: 0,
      departments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      BusinessHours: { total: 1, strategy: "" },
      emailInboxes: 0,
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 6,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 18,
      totalLivechatMessages: 0,
      totalMessages: 24,
      lastLogin: "Sat Mar 30 2024 13:48:32 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-26T17:40:18.321Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Tue Mar 26 2024 07:50:05 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 388687156e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 517615616,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 17025090, nice: 7490, sys: 2774760, idle: 3848414370, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 17532120, nice: 8050, sys: 2799540, idle: 3848967080, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 3886525319299709e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      uploadsTotalSize: 0,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 29,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 2, time: 118 }],
            count: 1,
            sessions: 2,
            time: 118
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 29,
        data: [
          {
            roles: [
              { role: "admin", count: 2, sessions: 494, time: 1067699 },
              { role: "user", count: 3, sessions: 8, time: 304432 }
            ],
            count: 5,
            sessions: 502,
            time: 1372131
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 29,
        data: [
          { count: 267, time: 356747, type: "", name: "Chrome", version: "122.0.0" },
          { count: 22, time: 259230, type: "browser", name: "Chrome", version: "123.0.0" },
          { count: 1, time: 43756, type: "other", name: "", version: "" }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 29,
        data: [{ count: 2, time: 118, type: "", name: "Chrome", version: "122.0.0" }]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 29,
        data: [
          {
            roles: [
              { role: "admin", count: 2, sessions: 284, time: 431839 },
              { role: "user", count: 2, sessions: 6, time: 227894 }
            ],
            count: 4,
            sessions: 290,
            time: 659733
          }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 29,
        data: [
          { count: 456, time: 602106, type: "", name: "Chrome", version: "122.0.0" },
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 22, time: 259230, type: "browser", name: "Chrome", version: "123.0.0" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 1, time: 43756, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 29,
        data: [{ count: 2, time: 118, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 29,
        data: [
          { count: 456, time: 602106, name: "Mac OS", version: "10.15.7" },
          { count: 39, time: 431307, name: "Windows", version: "10" },
          { count: 7, time: 338718, name: "", version: "" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 29,
        data: [
          { count: 267, time: 356747, name: "Mac OS", version: "10.15.7" },
          { count: 22, time: 259230, name: "Windows", version: "10" },
          { count: 1, time: 43756, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncRoles: false,
          syncRolesAutoRemove: false,
          syncData: false,
          syncChannels: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {
            enabled: false,
            interval: "every_24_hours",
            newUsers: true,
            existingUsers: true
          },
          ee: { syncActiveState: "disable", syncTeams: false, syncRoles: false }
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false,
          syncRoles: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "", dms: true, channels: true, groups: true, teams: true }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      enterprise: {
        modules: [
          "canned-responses",
          "ldap-enterprise",
          "livechat-enterprise",
          "voip-enterprise",
          "omnichannel-mobile-enterprise",
          "engagement-dashboard",
          "push-privacy",
          "teams-mention",
          "saml-enterprise",
          "oauth-enterprise",
          "federation",
          "videoconference-enterprise",
          "message-read-receipt",
          "outlook-calendar",
          "auditing",
          "scalability",
          "device-management",
          "hide-watermark",
          "custom-roles",
          "accessibility-certification"
        ],
        tags: ["Enterprise"],
        seatRequests: 0,
        slas: 0,
        cannedResponses: 0,
        livechatTags: 0,
        omnichannelRoomsWithPriorities: 0,
        omnichannelRoomsWithSlas: 0,
        livechatMonitors: 0,
        omnichannelPdfTranscriptRequested: 0,
        omnichannelPdfTranscriptSucceeded: 0,
        businessUnits: 0
      },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 1,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 6,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 11,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 30,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 2,
      maxMonthlyPeakConnections: 4,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: 100,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-30T14:12:00.258Z",
      _updatedAt: "2024-03-30T14:12:00.259Z"
    },
    {
      _id: "65eb1cb0f581e473b56470eb",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      totalRooms: 4,
      userLanguages: { none: 5 },
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      archivedDepartments: 0,
      departments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipSuccessfulCalls: 0,
      voipExtensions: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 9,
      totalLivechatMessages: 0,
      totalMessages: 13,
      lastLogin: "Fri Mar 08 2024 13:19:29 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-07T02:00:01.784Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 198607157e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 455708672,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 8564130, nice: 4740, sys: 1413610, idle: 1966686840, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 8835810, nice: 5350, sys: 1428880, idle: 1966979920, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 1985725332806561e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: { year: 2024, month: 3, day: 7, data: [] },
      uniqueUsersOfLastWeek: { year: 2024, month: 3, day: 7, data: [] },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 7,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 117, time: 623781 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 120,
            time: 784662
          }
        ]
      },
      uniqueDevicesOfYesterday: { year: 2024, month: 3, day: 7, data: [] },
      uniqueDevicesOfLastWeek: { year: 2024, month: 3, day: 7, data: [] },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 7,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: { year: 2024, month: 3, day: 7, data: [] },
      uniqueOSOfLastWeek: { year: 2024, month: 3, day: 7, data: [] },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 7,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 74, time: 297765, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 4,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 1,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-08T14:12:00.248Z",
      _updatedAt: "2024-03-08T14:12:00.248Z"
    },
    {
      _id: "65ec6e30f581e473b56470ed",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      archivedDepartments: 0,
      departments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipOnHoldCalls: 0,
      voipErrorCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 9,
      totalLivechatMessages: 0,
      totalMessages: 13,
      lastLogin: "Fri Mar 08 2024 14:33:13 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-07T02:00:01.784Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 207247155e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 462389248,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 8936330, nice: 4960, sys: 1470430, idle: 2052239710, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 9210110, nice: 5370, sys: 1485840, idle: 2052566250, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 2072125310387528e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      uploadsTotalSize: 0,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 8,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 5, time: 3148 }],
            count: 1,
            sessions: 5,
            time: 3148
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 8,
        data: [{ count: 5, time: 3148, type: "", name: "Chrome", version: "122.0.0" }]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 8,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 122, time: 626929 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 125,
            time: 787810
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 8,
        data: [{ count: 5, time: 3148, type: "", name: "Chrome", version: "122.0.0" }]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 8,
        data: [{ count: 5, time: 3148, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 8,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" },
          { count: 5, time: 3148, type: "", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 8,
        data: [{ count: 5, time: 3148, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 8,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 79, time: 300913, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 8,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 5, time: 3148 }],
            count: 1,
            sessions: 5,
            time: 3148
          }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 4,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 1,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-09T14:12:00.232Z",
      _updatedAt: "2024-03-09T14:12:00.232Z"
    },
    {
      _id: "65d21030f581e473b564707b",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      totalRooms: 1,
      userLanguages: { none: 5 },
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 0,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      totalTriggers: 0,
      archivedDepartments: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      departments: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipErrorCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      voipOnHoldCalls: 0,
      voipSuccessfulCalls: 0,
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 0,
      totalLivechatMessages: 0,
      totalMessages: 4,
      lastLogin: "Fri Feb 16 2024 20:58:57 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-15T07:50:10.346Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Thu Feb 15 2024 16:16:50 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 344471.56,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 480497664,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 1483800, nice: 2790, sys: 265510, idle: 341069760, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 1572150, nice: 2690, sys: 269690, idle: 341072410, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 344125.318784246 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: { year: 2024, month: 2, day: 17, data: [] },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 17,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 42, time: 279394 },
              { role: "user", count: 1, sessions: 2, time: 115589 }
            ],
            count: 4,
            sessions: 44,
            time: 394983
          }
        ]
      },
      uniqueDevicesOfYesterday: { year: 2024, month: 2, day: 17, data: [] },
      uniqueOSOfYesterday: { year: 2024, month: 2, day: 17, data: [] },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 17,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 42, time: 279394 },
              { role: "user", count: 1, sessions: 2, time: 115589 }
            ],
            count: 4,
            sessions: 44,
            time: 394983
          }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 17,
        data: [
          { count: 15, time: 251405, name: "Windows", version: "10" },
          { count: 28, time: 112660, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 17,
        data: [
          { count: 15, time: 251405, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 28, time: 112660, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 17,
        data: [
          { count: 15, time: 251405, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 28, time: 112660, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 17,
        data: [
          { count: 15, time: 251405, name: "Windows", version: "10" },
          { count: 28, time: 112660, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 2,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-18T14:12:00.212Z",
      _updatedAt: "2024-02-18T14:12:00.213Z"
    },
    {
      _id: "65ef1130f581e473b56470f0",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      archivedDepartments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      voipCalls: 0,
      voipSuccessfulCalls: 0,
      voipExtensions: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      chatsOnHold: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 9,
      totalLivechatMessages: 0,
      totalMessages: 13,
      lastLogin: "Fri Mar 08 2024 14:33:13 GMT+0000 (Coordinated Universal Time)",
      federatedServers: 0,
      federatedUsers: 0,
      lastMessageSentAt: "2024-03-07T02:00:01.784Z",
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 224527155e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 500715520,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 9758540, nice: 5160, sys: 1594530, idle: 2223256880, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 10046360, nice: 5670, sys: 1608810, idle: 2223606610, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 2244925309630695e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: { year: 2024, month: 3, day: 10, data: [] },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 10,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 5, time: 3148 }],
            count: 1,
            sessions: 5,
            time: 3148
          }
        ]
      },
      uniqueDevicesOfYesterday: { year: 2024, month: 3, day: 10, data: [] },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 10,
        data: [{ count: 5, time: 3148, type: "", name: "Chrome", version: "122.0.0" }]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 10,
        data: [{ count: 5, time: 3148, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 10,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 79, time: 300913, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 10,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" },
          { count: 5, time: 3148, type: "", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueOSOfYesterday: { year: 2024, month: 3, day: 10, data: [] },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 10,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 122, time: 626929 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 125,
            time: 787810
          }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 27,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-11T14:12:00.237Z",
      _updatedAt: "2024-03-11T14:12:00.238Z"
    },
    {
      _id: "65dc9c30f581e473b56470ca",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      archivedDepartments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      voipExtensions: 0,
      chatsOnHold: 0,
      voipCalls: 0,
      voipOnHoldCalls: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      omnichannelSources: [],
      departments: 0,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 3,
      totalLivechatMessages: 0,
      totalMessages: 7,
      lastLogin: "Mon Feb 26 2024 13:45:04 GMT+0000 (Coordinated Universal Time)",
      federatedServers: 0,
      federatedUsers: 0,
      lastMessageSentAt: "2024-02-21T02:00:02.085Z",
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 103567157e-2,
        loadavg: [0.01, 0.01, 0],
        totalmem: 4110323712,
        freemem: 457732096,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 4502870, nice: 3790, sys: 771710, idle: 1025537290, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 4659130, nice: 3630, sys: 777860, idle: 1025684670, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 1035325326697377e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      instanceCount: 1,
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 2,
        day: 25,
        data: [
          { count: 1, time: 73329, type: "", name: "Chrome", version: "121.0.0" },
          { count: 2, time: 8417, type: "browser", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 25,
        data: [
          { count: 44, time: 454385, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 59, time: 256261, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 2,
        day: 25,
        data: [
          { count: 1, time: 73329, name: "Mac OS", version: "10.15.7" },
          { count: 2, time: 8417, name: "Windows", version: "10" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 25,
        data: [
          { count: 44, time: 454385, name: "Windows", version: "10" },
          { count: 59, time: 256261, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 25,
        data: [
          { count: 29, time: 202980, name: "Windows", version: "10" },
          { count: 31, time: 143601, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 25,
        data: [
          { count: 29, time: 202980, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 31, time: 143601, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 25,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 101, time: 580683 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 104,
            time: 741564
          }
        ]
      },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 2,
        day: 25,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 3, time: 81746 }],
            count: 1,
            sessions: 3,
            time: 81746
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 25,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 59, time: 301289 },
              { role: "user", count: 1, sessions: 1, time: 45292 }
            ],
            count: 2,
            sessions: 60,
            time: 346581
          }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 3,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 2,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-26T14:12:00.255Z",
      _updatedAt: "2024-02-26T14:12:00.255Z"
    },
    {
      _id: "65f45730f581e473b5647151",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 2,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      totalTriggers: 0,
      archivedDepartments: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 9,
      totalLivechatMessages: 0,
      totalMessages: 13,
      lastLogin: "Fri Mar 15 2024 14:00:48 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-07T02:00:01.784Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 259087156e-2,
        loadavg: [0.07, 0.03, 0],
        totalmem: 4110323712,
        freemem: 477159424,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 11328630, nice: 5490, sys: 1851830, idle: 2565374200, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 11662770, nice: 6310, sys: 1866970, idle: 2565761250, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 2590525320845641e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 14,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 17, time: 16356 }],
            count: 1,
            sessions: 17,
            time: 16356
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 14,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 83, time: 111510 }],
            count: 1,
            sessions: 83,
            time: 111510
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 14,
        data: [{ count: 17, time: 16356, type: "", name: "Chrome", version: "122.0.0" }]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 14,
        data: [{ count: 83, time: 111510, type: "", name: "Chrome", version: "122.0.0" }]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 14,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 190, time: 622838 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 193,
            time: 783719
          }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 14,
        data: [
          { count: 42, time: 422187, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 68, time: 250022, type: "", name: "Chrome", version: "121.0.0" },
          { count: 83, time: 111510, type: "", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 14,
        data: [{ count: 17, time: 16356, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 14,
        data: [{ count: 83, time: 111510, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 14,
        data: [
          { count: 42, time: 422187, name: "Windows", version: "10" },
          { count: 151, time: 361532, name: "Mac OS", version: "10.15.7" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 28,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 1,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-15T14:12:00.237Z",
      _updatedAt: "2024-03-15T14:12:00.237Z"
    },
    {
      _id: "65f1b430f581e473b564712a",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      archivedDepartments: 0,
      totalCustomFields: 0,
      totalTriggers: 0,
      departments: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 9,
      totalLivechatMessages: 0,
      totalMessages: 13,
      lastLogin: "Wed Mar 13 2024 07:59:56 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-07T02:00:01.784Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 241807156e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 488558592,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 10538380, nice: 5350, sys: 1724050, idle: 2394320780, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 10846610, nice: 5980, sys: 1739040, idle: 2394691200, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 2417725321151546e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      uploadsTotalSize: 0,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 12,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 39, time: 37074 }],
            count: 1,
            sessions: 39,
            time: 37074
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 12,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 53, time: 65460 }],
            count: 1,
            sessions: 53,
            time: 65460
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 12,
        data: [{ count: 39, time: 37074, type: "", name: "Chrome", version: "122.0.0" }]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 12,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 170, time: 689241 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 173,
            time: 850122
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 12,
        data: [{ count: 53, time: 65460, type: "", name: "Chrome", version: "122.0.0" }]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 12,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 53, time: 65460, type: "", name: "Chrome", version: "122.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 12,
        data: [{ count: 39, time: 37074, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 12,
        data: [{ count: 53, time: 65460, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 12,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 127, time: 363225, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 28,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 1,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-13T14:12:00.252Z",
      _updatedAt: "2024-03-13T14:12:00.253Z"
    },
    {
      _id: "65df3f30f581e473b56470d8",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      archivedDepartments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 3,
      totalLivechatMessages: 0,
      totalMessages: 7,
      lastLogin: "Tue Feb 27 2024 18:09:41 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-21T02:00:02.085Z",
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 120847157e-2,
        loadavg: [0.01, 0, 0],
        totalmem: 4110323712,
        freemem: 485208064,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 5249550, nice: 3990, sys: 892250, idle: 1196653670, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 5414710, nice: 3910, sys: 900820, idle: 1196831290, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 1208125332559714e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      federatedServers: 0,
      federatedUsers: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 2,
        day: 27,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 12, time: 40975 }],
            count: 1,
            sessions: 12,
            time: 40975
          }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 27,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 27,
        data: [
          { count: 39, time: 159123, name: "Mac OS", version: "10.15.7" },
          { count: 25, time: 139851, name: "Windows", version: "10" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 2,
        day: 27,
        data: [{ count: 12, time: 40975, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 27,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 74, time: 297765, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 27,
        data: [
          { count: 39, time: 159123, type: "", name: "Chrome", version: "121.0.0" },
          { count: 25, time: 139851, type: "browser", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 27,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 64, time: 298974 }],
            count: 1,
            sessions: 64,
            time: 298974
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 2,
        day: 27,
        data: [{ count: 12, time: 40975, type: "", name: "Chrome", version: "121.0.0" }]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 27,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 117, time: 623781 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 120,
            time: 784662
          }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 3,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 1,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-28T14:12:00.260Z",
      _updatedAt: "2024-02-28T14:12:00.261Z"
    },
    {
      _id: "65f6fa30f581e473b5647175",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      archivedDepartments: 0,
      totalTriggers: 0,
      emailInboxes: 0,
      totalCustomFields: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 9,
      totalLivechatMessages: 0,
      totalMessages: 13,
      lastLogin: "Fri Mar 15 2024 20:09:37 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-07T02:00:01.784Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 27636716e-1,
        loadavg: [0, 0.03, 0],
        totalmem: 4110323712,
        freemem: 494649344,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 12100570, nice: 5720, sys: 1977690, idle: 2736445360, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 12455380, nice: 6580, sys: 1993090, idle: 2736860620, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 2763325357469127e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: { year: 2024, month: 3, day: 16, data: [] },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 16,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 123, time: 198168 }],
            count: 1,
            sessions: 123,
            time: 198168
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 16,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 203, time: 545703 },
              { role: "user", count: 1, sessions: 1, time: 45292 }
            ],
            count: 2,
            sessions: 204,
            time: 590995
          }
        ]
      },
      uniqueDevicesOfYesterday: { year: 2024, month: 3, day: 16, data: [] },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 16,
        data: [
          { count: 122, time: 160147, type: "", name: "Chrome", version: "122.0.0" },
          { count: 1, time: 38021, type: "wearable", name: "", version: "" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 16,
        data: [
          { count: 122, time: 160147, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 38021, name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: { year: 2024, month: 3, day: 16, data: [] },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 16,
        data: [
          { count: 30, time: 204574, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 46, time: 185105, type: "", name: "Chrome", version: "121.0.0" },
          { count: 127, time: 163295, type: "", name: "Chrome", version: "122.0.0" },
          { count: 1, time: 38021, type: "wearable", name: "", version: "" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 16,
        data: [
          { count: 173, time: 348400, name: "Mac OS", version: "10.15.7" },
          { count: 30, time: 204574, name: "Windows", version: "10" },
          { count: 1, time: 38021, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 28,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-17T14:12:00.295Z",
      _updatedAt: "2024-03-17T14:12:00.295Z"
    },
    {
      _id: "65d4b330f581e473b5647087",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      userLanguages: { none: 5 },
      totalRooms: 1,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 0,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      archivedDepartments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      voipCalls: 0,
      chatsOnHold: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 0,
      totalLivechatMessages: 0,
      totalMessages: 4,
      lastLogin: "Tue Feb 20 2024 12:48:22 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-15T07:50:10.346Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Thu Feb 15 2024 16:16:50 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 517271.54,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 472190976,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 2241180, nice: 3170, sys: 394870, idle: 512216820, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 2335440, nice: 2800, sys: 396230, idle: 512262380, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 516925.30030708 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      uploadsTotalSize: 0,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 2,
        day: 19,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 2, time: 6858 }],
            count: 1,
            sessions: 2,
            time: 6858
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 19,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 44, time: 286252 },
              { role: "user", count: 1, sessions: 2, time: 115589 }
            ],
            count: 4,
            sessions: 46,
            time: 401841
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 19,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 44, time: 286252 },
              { role: "user", count: 1, sessions: 2, time: 115589 }
            ],
            count: 4,
            sessions: 46,
            time: 401841
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 2,
        day: 19,
        data: [{ count: 2, time: 6858, type: "", name: "Chrome", version: "121.0.0" }]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 19,
        data: [
          { count: 15, time: 251405, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 30, time: 119518, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 19,
        data: [
          { count: 15, time: 251405, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 30, time: 119518, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 2,
        day: 19,
        data: [{ count: 2, time: 6858, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 19,
        data: [
          { count: 15, time: 251405, name: "Windows", version: "10" },
          { count: 30, time: 119518, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 19,
        data: [
          { count: 15, time: 251405, name: "Windows", version: "10" },
          { count: 30, time: 119518, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 2,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 2,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-20T14:12:00.205Z",
      _updatedAt: "2024-02-20T14:12:00.205Z"
    },
    {
      _id: "65f99d30f581e473b564718d",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      BusinessHours: { total: 1, strategy: "" },
      emailInboxes: 0,
      archivedDepartments: 0,
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipOnHoldCalls: 0,
      voipErrorCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 9,
      totalLivechatMessages: 0,
      totalMessages: 13,
      lastLogin: "Mon Mar 18 2024 10:30:48 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-07T02:00:01.784Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 293647159e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 569872384,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 12892280, nice: 5990, sys: 2102660, idle: 2907518350, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 13256900, nice: 6810, sys: 2117880, idle: 2907970950, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 2936125346113775e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      uploadsTotalSize: 0,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 18,
        data: [
          { count: 5, time: 256941, type: "wearable", name: "", version: "" },
          { count: 4, time: 363, type: "", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 18,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 225, time: 828520 },
              { role: "user", count: 1, sessions: 1, time: 45292 }
            ],
            count: 2,
            sessions: 226,
            time: 873812
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 18,
        data: [
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 130, time: 160785, type: "", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 18,
        data: [
          { count: 5, time: 256941, name: "", version: "" },
          { count: 4, time: 363, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 18,
        data: [
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 30, time: 204574, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 144, time: 189171, type: "", name: "Chrome", version: "122.0.0" },
          { count: 46, time: 185105, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 18,
        data: [
          { count: 6, time: 294962, name: "", version: "" },
          { count: 130, time: 160785, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 18,
        data: [
          { count: 190, time: 374276, name: "Mac OS", version: "10.15.7" },
          { count: 6, time: 294962, name: "", version: "" },
          { count: 30, time: 204574, name: "Windows", version: "10" }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 18,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 136, time: 455747 }],
            count: 1,
            sessions: 136,
            time: 455747
          }
        ]
      },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 18,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 9, time: 257304 }],
            count: 1,
            sessions: 9,
            time: 257304
          }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 28,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 2,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-19T14:12:00.273Z",
      _updatedAt: "2024-03-19T14:12:00.274Z"
    },
    {
      _id: "65e1e230f581e473b56470dd",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      totalRooms: 4,
      userLanguages: { none: 5 },
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      archivedDepartments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      voipCalls: 0,
      chatsOnHold: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 6,
      totalLivechatMessages: 0,
      totalMessages: 10,
      lastLogin: "Tue Feb 27 2024 18:09:41 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-29T02:00:02.780Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 138127154e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 457773056,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 6017340, nice: 4280, sys: 1013470, idle: 1367754740, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 6210010, nice: 4110, sys: 1023160, idle: 1367948440, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 1380925300181282e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: { year: 2024, month: 2, day: 29, data: [] },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 29,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 33, time: 184014 }],
            count: 1,
            sessions: 33,
            time: 184014
          }
        ]
      },
      uniqueDevicesOfYesterday: { year: 2024, month: 2, day: 29, data: [] },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 29,
        data: [
          { count: 22, time: 120322, type: "", name: "Chrome", version: "121.0.0" },
          { count: 11, time: 63692, type: "browser", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 29,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 117, time: 623781 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 120,
            time: 784662
          }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 29,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: { year: 2024, month: 2, day: 29, data: [] },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 29,
        data: [
          { count: 22, time: 120322, name: "Mac OS", version: "10.15.7" },
          { count: 11, time: 63692, name: "Windows", version: "10" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 29,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 74, time: 297765, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 3,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-01T14:12:00.215Z",
      _updatedAt: "2024-03-01T14:12:00.216Z"
    },
    {
      _id: "65fc4030f581e473b564719a",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      totalCustomFields: 0,
      archivedDepartments: 0,
      totalTriggers: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      departments: 0,
      chatsOnHold: 0,
      voipErrorCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipOnHoldCalls: 0,
      voipCalls: 0,
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 12,
      totalLivechatMessages: 0,
      totalMessages: 16,
      lastLogin: "Thu Mar 21 2024 11:53:19 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-20T02:00:15.082Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Mar 20 2024 09:50:34 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 310927158e-2,
        loadavg: [0.06, 0.01, 0],
        totalmem: 4110323712,
        freemem: 496029696,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 13657930, nice: 6220, sys: 2225430, idle: 3078593870, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 14067420, nice: 7080, sys: 2243040, idle: 3079057470, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 3108925341226202e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 20,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 88, time: 409404 }],
            count: 1,
            sessions: 88,
            time: 409404
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 20,
        data: [
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 78, time: 94017, type: "", name: "Chrome", version: "122.0.0" },
          { count: 4, time: 20425, type: "browser", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 20,
        data: [{ count: 4, time: 20425, type: "browser", name: "Chrome", version: "122.0.0" }]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 20,
        data: [
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 144, time: 189171, type: "", name: "Chrome", version: "122.0.0" },
          { count: 39, time: 159123, type: "", name: "Chrome", version: "121.0.0" },
          { count: 25, time: 139851, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 4, time: 20425, type: "browser", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 20,
        data: [{ count: 4, time: 20425, name: "Windows", version: "10" }]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 20,
        data: [
          { count: 183, time: 348294, name: "Mac OS", version: "10.15.7" },
          { count: 6, time: 294962, name: "", version: "" },
          { count: 29, time: 160276, name: "Windows", version: "10" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 20,
        data: [
          { count: 6, time: 294962, name: "", version: "" },
          { count: 78, time: 94017, name: "Mac OS", version: "10.15.7" },
          { count: 4, time: 20425, name: "Windows", version: "10" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 20,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 218, time: 803532 }],
            count: 1,
            sessions: 218,
            time: 803532
          }
        ]
      },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 20,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 4, time: 20425 }],
            count: 1,
            sessions: 4,
            time: 20425
          }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 28,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 1,
      maxMonthlyPeakConnections: 2,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-21T14:12:00.272Z",
      _updatedAt: "2024-03-21T14:12:00.272Z"
    },
    {
      _id: "65cf6d30f581e473b5647078",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      totalRooms: 1,
      userLanguages: { none: 5 },
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 0,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      archivedDepartments: 0,
      departments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipExtensions: 0,
      voipCalls: 0,
      voipSuccessfulCalls: 0,
      voipOnHoldCalls: 0,
      voipErrorCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 0,
      totalLivechatMessages: 0,
      totalMessages: 4,
      lastLogin: "Fri Feb 16 2024 11:50:13 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-15T07:50:10.346Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Thu Feb 15 2024 16:16:50 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 171671.54,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 455667712,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 779470, nice: 2410, sys: 145490, idle: 169885180, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 813200, nice: 2600, sys: 145510, idle: 169897810, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 171325.302249466 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 2,
        day: 15,
        data: [
          { count: 8, time: 181819, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 16, time: 53566, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 2,
        day: 15,
        data: [
          { count: 8, time: 181819, name: "Windows", version: "10" },
          { count: 16, time: 53566, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 15,
        data: [
          { count: 11, time: 215611, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 22, time: 101309, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 15,
        data: [
          { count: 11, time: 215611, name: "Windows", version: "10" },
          { count: 22, time: 101309, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 15,
        data: [
          { count: 11, time: 215611, name: "Windows", version: "10" },
          { count: 22, time: 101309, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 15,
        data: [
          { count: 11, time: 215611, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 22, time: 101309, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 15,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 32, time: 232249 },
              { role: "user", count: 1, sessions: 2, time: 115589 }
            ],
            count: 4,
            sessions: 34,
            time: 347838
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 15,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 32, time: 232249 },
              { role: "user", count: 1, sessions: 2, time: 115589 }
            ],
            count: 4,
            sessions: 34,
            time: 347838
          }
        ]
      },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 2,
        day: 15,
        data: [
          {
            roles: [
              { role: "user", count: 1, sessions: 2, time: 115589 },
              { role: "admin", count: 3, sessions: 22, time: 119796 }
            ],
            count: 4,
            sessions: 24,
            time: 235385
          }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 2,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 3,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-16T14:12:00.217Z",
      _updatedAt: "2024-02-16T14:12:00.217Z"
    },
    {
      _id: "65fee330f581e473b56471df",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 6,
      activeUsers: 5,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 5,
      userLanguages: { none: 6 },
      totalRooms: 6,
      totalChannels: 3,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 1,
      totalLivechatAgents: 1,
      totalLivechatManagers: 1,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      totalCustomFields: 0,
      BusinessHours: { total: 1, strategy: "" },
      archivedDepartments: 0,
      totalTriggers: 0,
      emailInboxes: 0,
      chatsOnHold: 0,
      voipCalls: 0,
      departments: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipExtensions: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      voipOnHoldCalls: 0,
      totalChannelMessages: 5,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 15,
      totalLivechatMessages: 0,
      totalMessages: 20,
      lastLogin: "Fri Mar 22 2024 17:48:38 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-22T12:58:10.314Z",
      lastSeenSubscription: "Fri Mar 22 2024 13:40:59 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 328207158e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 496418816,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 14420500, nice: 6610, sys: 2346130, idle: 3249677490, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 14832350, nice: 7150, sys: 2365590, idle: 3250187770, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 3281725336846782e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      federatedServers: 0,
      federatedUsers: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 22,
        data: [
          {
            roles: [
              { role: "user", count: 2, sessions: 2, time: 76538 },
              { role: "admin", count: 1, sessions: 49, time: 105685 }
            ],
            count: 3,
            sessions: 51,
            time: 182223
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 22,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 82, time: 434544 },
              { role: "user", count: 2, sessions: 2, time: 76538 }
            ],
            count: 3,
            sessions: 84,
            time: 511082
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 22,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 243, time: 819874 },
              { role: "user", count: 2, sessions: 2, time: 76538 }
            ],
            count: 3,
            sessions: 245,
            time: 896412
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 22,
        data: [
          { count: 6, time: 126035, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 45, time: 56188, type: "", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 22,
        data: [
          { count: 5, time: 256941, type: "wearable", name: "", version: "" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 62, time: 82064, type: "", name: "Chrome", version: "122.0.0" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 22,
        data: [
          { count: 5, time: 256941, name: "", version: "" },
          { count: 17, time: 172077, name: "Windows", version: "10" },
          { count: 62, time: 82064, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 22,
        data: [
          { count: 211, time: 365681, name: "Mac OS", version: "10.15.7" },
          { count: 6, time: 294962, name: "", version: "" },
          { count: 28, time: 235769, name: "Windows", version: "10" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 22,
        data: [
          { count: 6, time: 126035, name: "Windows", version: "10" },
          { count: 45, time: 56188, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 22,
        data: [
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 189, time: 245359, type: "", name: "Chrome", version: "122.0.0" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 22, time: 120322, type: "", name: "Chrome", version: "121.0.0" },
          { count: 11, time: 63692, type: "browser", name: "Chrome", version: "121.0.0" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 5,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 29,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 2,
      maxMonthlyPeakConnections: 2,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-23T14:12:00.276Z",
      _updatedAt: "2024-03-23T14:12:00.277Z"
    },
    {
      _id: "65e48530f581e473b56470df",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      archivedDepartments: 0,
      departments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipSuccessfulCalls: 0,
      voipExtensions: 0,
      voipErrorCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      voipOnHoldCalls: 0,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 6,
      totalLivechatMessages: 0,
      totalMessages: 10,
      lastLogin: "Tue Feb 27 2024 18:09:41 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-29T02:00:02.780Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 155407155e-2,
        loadavg: [0.08, 0.02, 0.01],
        totalmem: 4110323712,
        freemem: 551362560,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 6750380, nice: 4310, sys: 1129050, idle: 1538872790, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 6957520, nice: 4580, sys: 1139880, idle: 1539111880, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 1553725309161267e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: { year: 2024, month: 3, day: 2, data: [] },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 2,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 19, time: 124844 }],
            count: 1,
            sessions: 19,
            time: 124844
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 2,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 117, time: 623781 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 120,
            time: 784662
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 2,
        data: [
          { count: 16, time: 114833, type: "", name: "Chrome", version: "121.0.0" },
          { count: 3, time: 10011, type: "browser", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 2,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 74, time: 297765, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 2,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueDevicesOfYesterday: { year: 2024, month: 3, day: 2, data: [] },
      uniqueOSOfYesterday: { year: 2024, month: 3, day: 2, data: [] },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 2,
        data: [
          { count: 16, time: 114833, name: "Mac OS", version: "10.15.7" },
          { count: 3, time: 10011, name: "Windows", version: "10" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 3,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-03T14:12:00.226Z",
      _updatedAt: "2024-03-03T14:12:00.226Z"
    },
    {
      _id: "66018630f581e473b56471ff",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: true
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 6,
      activeUsers: 5,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 4,
      totalRooms: 6,
      userLanguages: { none: 6 },
      totalChannels: 3,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 1,
      totalLivechatAgents: 1,
      totalLivechatManagers: 1,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      onHoldEnabled: false,
      lastChattedAgentPreferred: false,
      assignNewConversationsToContactManager: true,
      visitorAbandonment: "none",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      voipCalls: 0,
      voipExtensions: 0,
      voipErrorCalls: 0,
      voipSuccessfulCalls: 0,
      chatsOnHold: 0,
      voipOnHoldCalls: 0,
      archivedDepartments: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 5,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 15,
      totalLivechatMessages: 0,
      totalMessages: 20,
      lastLogin: "Mon Mar 25 2024 13:42:19 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-22T12:58:10.314Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Fri Mar 22 2024 13:40:59 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 345487155e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 512081920,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 15130270, nice: 6880, sys: 2466860, idle: 3420776620, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 15580180, nice: 7390, sys: 2488640, idle: 3421293930, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 3454525313373366e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: { year: 2024, month: 3, day: 24, data: [] },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 24,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 69, time: 409031 },
              { role: "user", count: 2, sessions: 2, time: 76538 }
            ],
            count: 3,
            sessions: 71,
            time: 485569
          }
        ]
      },
      uniqueDevicesOfYesterday: { year: 2024, month: 3, day: 24, data: [] },
      uniqueOSOfYesterday: { year: 2024, month: 3, day: 24, data: [] },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 24,
        data: [
          { count: 205, time: 360192, name: "Mac OS", version: "10.15.7" },
          { count: 6, time: 294962, name: "", version: "" },
          { count: 20, time: 182088, name: "Windows", version: "10" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 24,
        data: [
          { count: 5, time: 256941, name: "", version: "" },
          { count: 17, time: 172077, name: "Windows", version: "10" },
          { count: 49, time: 56551, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 24,
        data: [
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 189, time: 245359, type: "", name: "Chrome", version: "122.0.0" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 16, time: 114833, type: "", name: "Chrome", version: "121.0.0" },
          { count: 3, time: 10011, type: "browser", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 24,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 229, time: 760704 },
              { role: "user", count: 2, sessions: 2, time: 76538 }
            ],
            count: 3,
            sessions: 231,
            time: 837242
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 24,
        data: [
          { count: 5, time: 256941, type: "wearable", name: "", version: "" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 49, time: 56551, type: "", name: "Chrome", version: "122.0.0" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncRoles: false,
          syncRolesAutoRemove: false,
          syncData: false,
          syncChannels: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {
            enabled: false,
            interval: "every_24_hours",
            newUsers: true,
            existingUsers: true
          },
          ee: { syncActiveState: "disable", syncTeams: false, syncRoles: false }
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false,
          syncRoles: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "", dms: true, channels: true, groups: true, teams: true }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      enterprise: {
        modules: [
          "canned-responses",
          "ldap-enterprise",
          "livechat-enterprise",
          "voip-enterprise",
          "omnichannel-mobile-enterprise",
          "engagement-dashboard",
          "push-privacy",
          "teams-mention",
          "saml-enterprise",
          "oauth-enterprise",
          "federation",
          "videoconference-enterprise",
          "message-read-receipt",
          "outlook-calendar"
        ],
        tags: ["Starter"],
        seatRequests: 0,
        slas: 0,
        cannedResponses: 0,
        livechatTags: 0,
        omnichannelRoomsWithPriorities: 0,
        livechatMonitors: 0,
        businessUnits: 0,
        omnichannelRoomsWithSlas: 0,
        omnichannelPdfTranscriptSucceeded: 0,
        omnichannelPdfTranscriptRequested: 0
      },
      totalRoomsWithStarred: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 5,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 9,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 29,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 1,
      maxMonthlyPeakConnections: 2,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: 100,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-25T14:12:00.245Z",
      _updatedAt: "2024-03-25T14:12:00.245Z"
    },
    {
      _id: "65d75630f581e473b56470ae",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      archivedDepartments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      voipCalls: 0,
      voipExtensions: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      voipSuccessfulCalls: 0,
      chatsOnHold: 0,
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 3,
      totalLivechatMessages: 0,
      totalMessages: 7,
      lastLogin: "Thu Feb 22 2024 13:41:46 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-21T02:00:02.085Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 690071.55,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 473567232,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 2979560, nice: 3460, sys: 524530, idle: 683316150, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 3083390, nice: 3e3, sys: 526160, idle: 683411010, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 689725.312135658 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 2,
        day: 21,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 22, time: 69365 }],
            count: 1,
            sessions: 22,
            time: 69365
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 21,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 65, time: 281719 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 68,
            time: 442600
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 21,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 75, time: 394172 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 78,
            time: 555053
          }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 2,
        day: 21,
        data: [
          { count: 8, time: 41333, name: "Windows", version: "10" },
          { count: 14, time: 28032, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 2,
        day: 21,
        data: [
          { count: 8, time: 41333, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 14, time: 28032, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 21,
        data: [
          { count: 28, time: 357461, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 49, time: 166674, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 21,
        data: [
          { count: 25, time: 323669, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 43, time: 118931, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 21,
        data: [
          { count: 25, time: 323669, name: "Windows", version: "10" },
          { count: 43, time: 118931, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 21,
        data: [
          { count: 28, time: 357461, name: "Windows", version: "10" },
          { count: 49, time: 166674, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      totalOTRRooms: 0,
      totalOTR: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 3,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 2,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-22T14:12:00.216Z",
      _updatedAt: "2024-02-22T14:12:00.216Z"
    },
    {
      _id: "66040c1bf581e473b5647253",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: true
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 7,
      activeUsers: 6,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 2,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 3,
      offlineUsers: 4,
      userLanguages: { none: 7 },
      totalRooms: 6,
      totalChannels: 3,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 1,
      totalLivechatAgents: 1,
      totalLivechatManagers: 1,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      onHoldEnabled: false,
      lastChattedAgentPreferred: false,
      assignNewConversationsToContactManager: true,
      visitorAbandonment: "none",
      voipEnabled: false,
      omnichannelSources: [],
      totalTriggers: 0,
      totalCustomFields: 0,
      departments: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      voipCalls: 0,
      archivedDepartments: 0,
      voipOnHoldCalls: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      chatsOnHold: 0,
      voipExtensions: 0,
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 6,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 18,
      totalLivechatMessages: 0,
      totalMessages: 24,
      lastLogin: "Wed Mar 27 2024 12:03:54 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-26T17:40:18.321Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Tue Mar 26 2024 07:50:05 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 362022633e-2,
        loadavg: [0.01, 0.01, 0],
        totalmem: 4110323712,
        freemem: 581685248,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 15847330, nice: 7150, sys: 2583190, idle: 3584468550, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 16333860, nice: 7610, sys: 2605650, idle: 3584990080, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 3619880090010598e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      uploadsTotalSize: 0,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          {
            roles: [
              { role: "admin", count: 2, sessions: 38, time: 202067 },
              { role: "user", count: 2, sessions: 3, time: 90979 }
            ],
            count: 4,
            sessions: 41,
            time: 293046
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          {
            roles: [
              { role: "admin", count: 2, sessions: 127, time: 390895 },
              { role: "user", count: 3, sessions: 5, time: 167517 }
            ],
            count: 5,
            sessions: 132,
            time: 558412
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 30, time: 171761, type: "", name: "Chrome", version: "122.0.0" },
          { count: 11, time: 121285, type: "browser", name: "Chrome", version: "123.0.0" }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 104, time: 265050, type: "", name: "Chrome", version: "122.0.0" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 11, time: 121285, type: "browser", name: "Chrome", version: "123.0.0" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 28, time: 293362, name: "Windows", version: "10" },
          { count: 104, time: 265050, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 30, time: 171761, name: "Mac OS", version: "10.15.7" },
          { count: 11, time: 121285, name: "Windows", version: "10" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 260, time: 495196, name: "Mac OS", version: "10.15.7" },
          { count: 6, time: 294962, name: "", version: "" },
          { count: 28, time: 293362, name: "Windows", version: "10" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 248, time: 454221, type: "", name: "Chrome", version: "122.0.0" },
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 11, time: 121285, type: "browser", name: "Chrome", version: "123.0.0" },
          { count: 12, time: 40975, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          {
            roles: [
              { role: "admin", count: 2, sessions: 289, time: 916003 },
              { role: "user", count: 3, sessions: 5, time: 167517 }
            ],
            count: 5,
            sessions: 294,
            time: 1083520
          }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncRoles: false,
          syncRolesAutoRemove: false,
          syncData: false,
          syncChannels: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {
            enabled: false,
            interval: "every_24_hours",
            newUsers: true,
            existingUsers: true
          },
          ee: { syncActiveState: "disable", syncTeams: false, syncRoles: false }
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false,
          syncRoles: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "", dms: true, channels: true, groups: true, teams: true }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      pushQueue: 0,
      totalOTRRooms: 0,
      totalOTR: 0,
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      enterprise: {
        modules: [
          "canned-responses",
          "ldap-enterprise",
          "livechat-enterprise",
          "voip-enterprise",
          "omnichannel-mobile-enterprise",
          "engagement-dashboard",
          "push-privacy",
          "teams-mention",
          "saml-enterprise",
          "oauth-enterprise",
          "federation",
          "videoconference-enterprise",
          "message-read-receipt",
          "outlook-calendar"
        ],
        tags: ["Starter"],
        seatRequests: 0,
        cannedResponses: 0,
        livechatTags: 0,
        slas: 0,
        omnichannelRoomsWithPriorities: 0,
        livechatMonitors: 0,
        omnichannelPdfTranscriptRequested: 0,
        businessUnits: 0,
        omnichannelPdfTranscriptSucceeded: 0,
        omnichannelRoomsWithSlas: 0
      },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 6,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 9,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 30,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 4,
      maxMonthlyPeakConnections: 4,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: 100,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-27T12:07:55.026Z",
      _updatedAt: "2024-03-27T12:07:55.026Z"
    },
    {
      _id: "65e72830f581e473b56470e1",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      totalTriggers: 0,
      totalCustomFields: 0,
      BusinessHours: { total: 1, strategy: "" },
      emailInboxes: 0,
      archivedDepartments: 0,
      chatsOnHold: 0,
      voipExtensions: 0,
      voipCalls: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      departments: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 6,
      totalLivechatMessages: 0,
      totalMessages: 10,
      lastLogin: "Tue Feb 27 2024 18:09:41 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-29T02:00:02.780Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 172687154e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 486240256,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 7462660, nice: 4440, sys: 1241370, idle: 1710005690, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 7689360, nice: 4940, sys: 1253410, idle: 1710273990, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 1726525301713447e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: { year: 2024, month: 3, day: 4, data: [] },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 4,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 12, time: 40975 }],
            count: 1,
            sessions: 12,
            time: 40975
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 4,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 117, time: 623781 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 120,
            time: 784662
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 4,
        data: [{ count: 12, time: 40975, type: "", name: "Chrome", version: "121.0.0" }]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 4,
        data: [{ count: 12, time: 40975, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueDevicesOfYesterday: { year: 2024, month: 3, day: 4, data: [] },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 4,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 4,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 74, time: 297765, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: { year: 2024, month: 3, day: 4, data: [] },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 3,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-05T14:12:00.440Z",
      _updatedAt: "2024-03-05T14:12:00.440Z"
    },
    {
      _id: "66042930f581e473b564725f",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: true
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 7,
      activeUsers: 6,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 2,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 3,
      offlineUsers: 4,
      userLanguages: { none: 7 },
      totalRooms: 6,
      totalChannels: 3,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 1,
      totalLivechatAgents: 1,
      totalLivechatManagers: 1,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      onHoldEnabled: false,
      lastChattedAgentPreferred: false,
      assignNewConversationsToContactManager: true,
      visitorAbandonment: "none",
      voipEnabled: false,
      omnichannelSources: [],
      archivedDepartments: 0,
      departments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 6,
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 18,
      totalLivechatMessages: 0,
      totalMessages: 24,
      lastLogin: "Wed Mar 27 2024 13:28:16 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-26T17:40:18.321Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Tue Mar 26 2024 07:50:05 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 362767154e-2,
        loadavg: [0.02, 0.02, 0],
        totalmem: 4110323712,
        freemem: 579842048,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 15879910, nice: 7150, sys: 2588470, idle: 3591838030, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 16368590, nice: 7610, sys: 2611490, idle: 3592357130, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 362732530417518e-8 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          {
            roles: [
              { role: "user", count: 2, sessions: 3, time: 90979 },
              { role: "admin", count: 2, sessions: 38, time: 202067 }
            ],
            count: 4,
            sessions: 41,
            time: 293046
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          {
            roles: [
              { role: "admin", count: 2, sessions: 127, time: 390895 },
              { role: "user", count: 3, sessions: 5, time: 167517 }
            ],
            count: 5,
            sessions: 132,
            time: 558412
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 30, time: 171761, type: "", name: "Chrome", version: "122.0.0" },
          { count: 11, time: 121285, type: "browser", name: "Chrome", version: "123.0.0" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          {
            roles: [
              { role: "admin", count: 2, sessions: 289, time: 916003 },
              { role: "user", count: 3, sessions: 5, time: 167517 }
            ],
            count: 5,
            sessions: 294,
            time: 1083520
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 104, time: 265050, type: "", name: "Chrome", version: "122.0.0" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 11, time: 121285, type: "browser", name: "Chrome", version: "123.0.0" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 30, time: 171761, name: "Mac OS", version: "10.15.7" },
          { count: 11, time: 121285, name: "Windows", version: "10" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 248, time: 454221, type: "", name: "Chrome", version: "122.0.0" },
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 11, time: 121285, type: "browser", name: "Chrome", version: "123.0.0" },
          { count: 12, time: 40975, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 260, time: 495196, name: "Mac OS", version: "10.15.7" },
          { count: 6, time: 294962, name: "", version: "" },
          { count: 28, time: 293362, name: "Windows", version: "10" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 26,
        data: [
          { count: 28, time: 293362, name: "Windows", version: "10" },
          { count: 104, time: 265050, name: "Mac OS", version: "10.15.7" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncRoles: false,
          syncRolesAutoRemove: false,
          syncData: false,
          syncChannels: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {
            enabled: false,
            interval: "every_24_hours",
            newUsers: true,
            existingUsers: true
          },
          ee: { syncActiveState: "disable", syncTeams: false, syncRoles: false }
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false,
          syncRoles: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "", dms: true, channels: true, groups: true, teams: true }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      totalOTRRooms: 0,
      totalOTR: 0,
      enterprise: {
        modules: [
          "canned-responses",
          "ldap-enterprise",
          "livechat-enterprise",
          "voip-enterprise",
          "omnichannel-mobile-enterprise",
          "engagement-dashboard",
          "push-privacy",
          "teams-mention",
          "saml-enterprise",
          "oauth-enterprise",
          "federation",
          "videoconference-enterprise",
          "message-read-receipt",
          "outlook-calendar",
          "auditing",
          "scalability",
          "device-management",
          "hide-watermark",
          "custom-roles",
          "accessibility-certification"
        ],
        tags: ["Enterprise"],
        seatRequests: 0,
        slas: 0,
        cannedResponses: 0,
        livechatTags: 0,
        omnichannelRoomsWithPriorities: 0,
        businessUnits: 0,
        omnichannelRoomsWithSlas: 0,
        omnichannelPdfTranscriptSucceeded: 0,
        livechatMonitors: 0,
        omnichannelPdfTranscriptRequested: 0
      },
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 6,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 11,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 30,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 4,
      maxMonthlyPeakConnections: 4,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: 100,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-27T14:12:00.238Z",
      _updatedAt: "2024-03-27T14:12:00.238Z"
    },
    {
      _id: "65ccd004f581e473b5647043",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 1,
      activeUsers: 0,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 0,
      totalRooms: 1,
      totalChannels: 1,
      userLanguages: { none: 1 },
      totalPrivateGroups: 0,
      totalDirect: 0,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      archivedDepartments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      voipCalls: 0,
      chatsOnHold: 0,
      voipSuccessfulCalls: 0,
      voipExtensions: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 0,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 0,
      totalLivechatMessages: 0,
      totalMessages: 0,
      lastLogin: "",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 364.08,
        loadavg: [1.23, 1.09, 0.52],
        totalmem: 4110323712,
        freemem: 166543360,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 107430, nice: 0, sys: 25060, idle: 194380, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 113160, nice: 0, sys: 25040, idle: 194160, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 17.845175984 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 0,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: { year: 2024, month: 2, day: 13, data: [] },
      uniqueUsersOfLastWeek: { year: 2024, month: 2, day: 13, data: [] },
      uniqueUsersOfLastMonth: { year: 2024, month: 2, day: 13, data: [] },
      uniqueDevicesOfYesterday: { year: 2024, month: 2, day: 13, data: [] },
      uniqueDevicesOfLastWeek: { year: 2024, month: 2, day: 13, data: [] },
      uniqueDevicesOfLastMonth: { year: 2024, month: 2, day: 13, data: [] },
      uniqueOSOfYesterday: { year: 2024, month: 2, day: 13, data: [] },
      uniqueOSOfLastWeek: { year: 2024, month: 2, day: 13, data: [] },
      uniqueOSOfLastMonth: { year: 2024, month: 2, day: 13, data: [] },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 0,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 0,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 0,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 0,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-14T14:36:52.918Z",
      _updatedAt: "2024-02-14T14:36:52.919Z"
    },
    {
      _id: "6606cc30f581e473b564732b",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: true
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 7,
      activeUsers: 6,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 6,
      totalRooms: 6,
      userLanguages: { none: 7 },
      totalChannels: 3,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 1,
      totalLivechatAgents: 1,
      totalLivechatManagers: 1,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      onHoldEnabled: false,
      lastChattedAgentPreferred: false,
      assignNewConversationsToContactManager: true,
      visitorAbandonment: "none",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      BusinessHours: { total: 1, strategy: "" },
      archivedDepartments: 0,
      emailInboxes: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipOnHoldCalls: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      chatsOnHold: 0,
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 6,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 18,
      totalLivechatMessages: 0,
      totalMessages: 24,
      lastLogin: "Fri Mar 29 2024 07:18:43 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-26T17:40:18.321Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Tue Mar 26 2024 07:50:05 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 380047155e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 529559552,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 16655820, nice: 7430, sys: 2714300, idle: 3762872590, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 17151150, nice: 7850, sys: 2738740, idle: 3763421530, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 3800125313041934e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 28,
        data: [
          {
            roles: [
              { role: "user", count: 1, sessions: 1, time: 49418 },
              { role: "admin", count: 1, sessions: 112, time: 76441 }
            ],
            count: 2,
            sessions: 113,
            time: 125859
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 28,
        data: [
          {
            roles: [
              { role: "admin", count: 2, sessions: 331, time: 537406 },
              { role: "user", count: 3, sessions: 8, time: 304432 }
            ],
            count: 5,
            sessions: 339,
            time: 841838
          }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 28,
        data: [
          { count: 454, time: 601988, type: "", name: "Chrome", version: "122.0.0" },
          { count: 6, time: 294962, type: "wearable", name: "", version: "" },
          { count: 22, time: 259230, type: "browser", name: "Chrome", version: "123.0.0" },
          { count: 17, time: 172077, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 1, time: 43756, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 28,
        data: [
          { count: 454, time: 601988, name: "Mac OS", version: "10.15.7" },
          { count: 39, time: 431307, name: "Windows", version: "10" },
          { count: 7, time: 338718, name: "", version: "" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 28,
        data: [
          {
            roles: [
              { role: "admin", count: 2, sessions: 492, time: 1067581 },
              { role: "user", count: 3, sessions: 8, time: 304432 }
            ],
            count: 5,
            sessions: 500,
            time: 1372013
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 28,
        data: [
          { count: 310, time: 412817, type: "", name: "Chrome", version: "122.0.0" },
          { count: 22, time: 259230, type: "browser", name: "Chrome", version: "123.0.0" },
          { count: 6, time: 126035, type: "browser", name: "Chrome", version: "122.0.0" },
          { count: 1, time: 43756, type: "other", name: "", version: "" }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 28,
        data: [
          { count: 111, time: 66315, type: "", name: "Chrome", version: "122.0.0" },
          { count: 2, time: 59544, type: "browser", name: "Chrome", version: "123.0.0" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 28,
        data: [
          { count: 310, time: 412817, name: "Mac OS", version: "10.15.7" },
          { count: 28, time: 385265, name: "Windows", version: "10" },
          { count: 1, time: 43756, name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 28,
        data: [
          { count: 111, time: 66315, name: "Mac OS", version: "10.15.7" },
          { count: 2, time: 59544, name: "Windows", version: "10" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncRoles: false,
          syncRolesAutoRemove: false,
          syncData: false,
          syncChannels: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {
            enabled: false,
            interval: "every_24_hours",
            newUsers: true,
            existingUsers: true
          },
          ee: { syncActiveState: "disable", syncTeams: false, syncRoles: false }
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false,
          syncRoles: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "", dms: true, channels: true, groups: true, teams: true }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      enterprise: {
        modules: [
          "canned-responses",
          "ldap-enterprise",
          "livechat-enterprise",
          "voip-enterprise",
          "omnichannel-mobile-enterprise",
          "engagement-dashboard",
          "push-privacy",
          "teams-mention",
          "saml-enterprise",
          "oauth-enterprise",
          "federation",
          "videoconference-enterprise",
          "message-read-receipt",
          "outlook-calendar",
          "auditing",
          "scalability",
          "device-management",
          "hide-watermark",
          "custom-roles",
          "accessibility-certification"
        ],
        tags: ["Enterprise"],
        seatRequests: 0,
        slas: 0,
        cannedResponses: 0,
        livechatTags: 0,
        omnichannelRoomsWithPriorities: 0,
        omnichannelRoomsWithSlas: 0,
        businessUnits: 0,
        livechatMonitors: 0,
        omnichannelPdfTranscriptRequested: 0,
        omnichannelPdfTranscriptSucceeded: 0
      },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 1,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 6,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 11,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 30,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 2,
      maxMonthlyPeakConnections: 4,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: 100,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-29T14:12:00.243Z",
      _updatedAt: "2024-03-29T14:12:00.243Z"
    },
    {
      _id: "65e9cb30f581e473b56470e6",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      totalRooms: 4,
      userLanguages: { none: 5 },
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      archivedDepartments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      voipCalls: 0,
      chatsOnHold: 0,
      voipExtensions: 0,
      voipOnHoldCalls: 0,
      voipErrorCalls: 0,
      voipSuccessfulCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      omnichannelSources: [],
      departments: 0,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 9,
      totalLivechatMessages: 0,
      totalMessages: 13,
      lastLogin: "Tue Feb 27 2024 18:09:41 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-03-07T02:00:01.784Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 189967158e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 472686592,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 8202970, nice: 4560, sys: 1357470, idle: 1881120730, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 8446760, nice: 5300, sys: 1370430, idle: 1881420120, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 1899325341767418e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotal: 0,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      instanceCount: 1,
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 6,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 117, time: 623781 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 120,
            time: 784662
          }
        ]
      },
      uniqueDevicesOfLastWeek: { year: 2024, month: 3, day: 6, data: [] },
      uniqueDevicesOfYesterday: { year: 2024, month: 3, day: 6, data: [] },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 6,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 6,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 74, time: 297765, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: { year: 2024, month: 3, day: 6, data: [] },
      uniqueOSOfLastWeek: { year: 2024, month: 3, day: 6, data: [] },
      uniqueUsersOfYesterday: { year: 2024, month: 3, day: 6, data: [] },
      uniqueUsersOfLastWeek: { year: 2024, month: 3, day: 6, data: [] },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      pushQueue: 0,
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 4,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 0,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-07T14:12:00.265Z",
      _updatedAt: "2024-03-07T14:12:00.265Z"
    },
    {
      _id: "65d9f930f581e473b56470be",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      totalRooms: 4,
      userLanguages: { none: 5 },
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      archivedDepartments: 0,
      departments: 0,
      totalCustomFields: 0,
      totalTriggers: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipExtensions: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 3,
      totalLivechatMessages: 0,
      totalMessages: 7,
      lastLogin: "Sat Feb 24 2024 12:58:09 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-21T02:00:02.085Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 862871.58,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 522354688,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 3724560, nice: 3660, sys: 645810, idle: 854434200, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 3865030, nice: 3300, sys: 650030, idle: 854544440, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 862525.337927747 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 2,
        day: 23,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 8, time: 41628 }],
            count: 1,
            sessions: 8,
            time: 41628
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 23,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 50, time: 202001 },
              { role: "user", count: 1, sessions: 1, time: 45292 }
            ],
            count: 2,
            sessions: 51,
            time: 247293
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 23,
        data: [
          { count: 21, time: 177021, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 30, time: 70272, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 23,
        data: [
          { count: 21, time: 177021, name: "Windows", version: "10" },
          { count: 30, time: 70272, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 23,
        data: [
          { count: 36, time: 428426, name: "Windows", version: "10" },
          { count: 58, time: 182932, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 23,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 92, time: 481395 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 95,
            time: 642276
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 2,
        day: 23,
        data: [
          { count: 2, time: 36139, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 6, time: 5489, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 23,
        data: [
          { count: 36, time: 428426, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 58, time: 182932, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 2,
        day: 23,
        data: [
          { count: 2, time: 36139, name: "Windows", version: "10" },
          { count: 6, time: 5489, name: "Mac OS", version: "10.15.7" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 3,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 2,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-24T14:12:00.251Z",
      _updatedAt: "2024-02-24T14:12:00.251Z"
    },
    {
      _id: "65cccf85480fd5b2fc6dd0ea",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 0,
      activeUsers: 0,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 0,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 0,
      offlineUsers: 0,
      totalRooms: 0,
      userLanguages: { none: 0 },
      totalChannels: 0,
      totalPrivateGroups: 0,
      totalDirect: 0,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      departments: 0,
      archivedDepartments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 0, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 0,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 0,
      totalLivechatMessages: 0,
      totalMessages: 0,
      lastLogin: "",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 236.57,
        loadavg: [2.65, 1.27, 0.5],
        totalmem: 4110323712,
        freemem: 229433344,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 90820, nice: 0, sys: 22960, idle: 88120, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 99260, nice: 0, sys: 23140, idle: 84150, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 24.774401323 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:34:45.044Z",
        locked: false,
        version: 0
      },
      instanceCount: 0,
      msEnabled: false,
      oplogEnabled: false,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: {
        engineVersion: "1.41.0",
        totalInstalled: false,
        totalActive: false,
        totalFailed: false
      },
      uniqueUsersOfYesterday: { year: 2024, month: 2, day: 13, data: [] },
      uniqueDevicesOfYesterday: { year: 2024, month: 2, day: 13, data: [] },
      uniqueUsersOfLastWeek: { year: 2024, month: 2, day: 13, data: [] },
      uniqueDevicesOfLastWeek: { year: 2024, month: 2, day: 13, data: [] },
      uniqueUsersOfLastMonth: { year: 2024, month: 2, day: 13, data: [] },
      uniqueDevicesOfLastMonth: { year: 2024, month: 2, day: 13, data: [] },
      uniqueOSOfYesterday: { year: 2024, month: 2, day: 13, data: [] },
      uniqueOSOfLastWeek: { year: 2024, month: 2, day: 13, data: [] },
      uniqueOSOfLastMonth: { year: 2024, month: 2, day: 13, data: [] },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: { users: 0 },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      enterprise: { modules: [], tags: [] },
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 0,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 0,
      totalSubscriptionRoles: 0,
      totalUserRoles: 0,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 0,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      maxMonthlyPeakConnections: null,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-14T14:34:45.253Z",
      _updatedAt: "2024-02-14T14:34:45.254Z"
    },
    {
      _id: "65ce1bb0f581e473b5647066",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      totalRooms: 1,
      userLanguages: { none: 5 },
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 0,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      archivedDepartments: 0,
      voipCalls: 0,
      emailInboxes: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      voipExtensions: 0,
      BusinessHours: { total: 1, strategy: "" },
      voipSuccessfulCalls: 0,
      voipOnHoldCalls: 0,
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      voipErrorCalls: 0,
      chatsOnHold: 0,
      departments: 0,
      totalDirectMessages: 0,
      omnichannelSources: [],
      totalLivechatMessages: 0,
      totalMessages: 4,
      lastLogin: "Thu Feb 15 2024 14:02:14 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-15T07:50:10.346Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 14 2024 15:27:30 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 85271.52,
        loadavg: [0, 0.01, 0],
        totalmem: 4110323712,
        freemem: 426917888,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 429880, nice: 2410, sys: 86960, idle: 84298770, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 442730, nice: 2360, sys: 86160, idle: 84308270, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 84925.282989237 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotalSize: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotal: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 14,
        data: [
          { count: 6, time: 47743, name: "Mac OS", version: "10.15.7" },
          { count: 3, time: 33792, name: "Windows", version: "10" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 14,
        data: [
          { count: 6, time: 47743, type: "", name: "Chrome", version: "121.0.0" },
          { count: 3, time: 33792, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 2,
        day: 14,
        data: [
          { count: 6, time: 47743, name: "Mac OS", version: "10.15.7" },
          { count: 3, time: 33792, name: "Windows", version: "10" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 14,
        data: [
          { count: 6, time: 47743, name: "Mac OS", version: "10.15.7" },
          { count: 3, time: 33792, name: "Windows", version: "10" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 2,
        day: 14,
        data: [
          { count: 6, time: 47743, type: "", name: "Chrome", version: "121.0.0" },
          { count: 3, time: 33792, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 2,
        day: 14,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 10, time: 112453 }],
            count: 1,
            sessions: 10,
            time: 112453
          }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 14,
        data: [
          { count: 6, time: 47743, type: "", name: "Chrome", version: "121.0.0" },
          { count: 3, time: 33792, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 14,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 10, time: 112453 }],
            count: 1,
            sessions: 10,
            time: 112453
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 14,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 10, time: 112453 }],
            count: 1,
            sessions: 10,
            time: 112453
          }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 2,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 2,
      maxMonthlyPeakConnections: 2,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-15T14:12:00.187Z",
      _updatedAt: "2024-02-15T14:12:00.187Z"
    },
    {
      _id: "65d361b0f581e473b564707e",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      totalRooms: 1,
      userLanguages: { none: 5 },
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 0,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      archivedDepartments: 0,
      departments: 0,
      totalTriggers: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipSuccessfulCalls: 0,
      voipExtensions: 0,
      voipErrorCalls: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 0,
      totalLivechatMessages: 0,
      totalMessages: 4,
      lastLogin: "Mon Feb 19 2024 12:00:47 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-15T07:50:10.346Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Thu Feb 15 2024 16:16:50 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 430871.54,
        loadavg: [0.02, 0.01, 0],
        totalmem: 4110323712,
        freemem: 472305664,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 1870090, nice: 3010, sys: 331600, idle: 426636330, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 1952200, nice: 2700, sys: 333640, idle: 426667200, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 430525.303265922 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      uploadsTotalSize: 0,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: { year: 2024, month: 2, day: 18, data: [] },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 18,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 42, time: 279394 },
              { role: "user", count: 1, sessions: 2, time: 115589 }
            ],
            count: 4,
            sessions: 44,
            time: 394983
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 18,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 42, time: 279394 },
              { role: "user", count: 1, sessions: 2, time: 115589 }
            ],
            count: 4,
            sessions: 44,
            time: 394983
          }
        ]
      },
      uniqueDevicesOfYesterday: { year: 2024, month: 2, day: 18, data: [] },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 18,
        data: [
          { count: 15, time: 251405, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 28, time: 112660, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 18,
        data: [
          { count: 15, time: 251405, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 28, time: 112660, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfYesterday: { year: 2024, month: 2, day: 18, data: [] },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 18,
        data: [
          { count: 15, time: 251405, name: "Windows", version: "10" },
          { count: 28, time: 112660, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 18,
        data: [
          { count: 15, time: 251405, name: "Windows", version: "10" },
          { count: 28, time: 112660, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 2,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 1,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-19T14:12:00.202Z",
      _updatedAt: "2024-02-19T14:12:00.202Z"
    },
    {
      _id: "65ddedb0f581e473b56470cf",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 0,
      busyUsers: 0,
      totalConnectedUsers: 1,
      offlineUsers: 4,
      userLanguages: { none: 5 },
      totalRooms: 4,
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      archivedDepartments: 0,
      totalTriggers: 0,
      BusinessHours: { total: 1, strategy: "" },
      emailInboxes: 0,
      totalCustomFields: 0,
      voipCalls: 0,
      voipSuccessfulCalls: 0,
      voipExtensions: 0,
      voipErrorCalls: 0,
      chatsOnHold: 0,
      departments: 0,
      voipOnHoldCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 3,
      totalLivechatMessages: 0,
      totalMessages: 7,
      lastLogin: "Tue Feb 27 2024 10:39:22 GMT+0000 (Coordinated Universal Time)",
      lastMessageSentAt: "2024-02-21T02:00:02.085Z",
      federatedServers: 0,
      federatedUsers: 0,
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 112207156e-2,
        loadavg: [0, 0, 0],
        totalmem: 4110323712,
        freemem: 470220800,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 4873280, nice: 3840, sys: 830540, idle: 1111105980, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 5027430, nice: 3800, sys: 837240, idle: 1111277930, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 1121725317954719e-9 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      uploadsTotalSize: 0,
      instanceCount: 1,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 2,
        day: 26,
        data: [
          { count: 1, time: 1594, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 3, time: 529, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 2,
        day: 26,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 62, time: 256790, type: "", name: "Chrome", version: "121.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 2,
        day: 26,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 62, time: 256790, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 2,
        day: 26,
        data: [
          { count: 30, time: 204574, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 32, time: 137272, type: "", name: "Chrome", version: "121.0.0" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 2,
        day: 26,
        data: [
          { count: 30, time: 204574, name: "Windows", version: "10" },
          { count: 32, time: 137272, name: "Mac OS", version: "10.15.7" }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 2,
        day: 26,
        data: [
          {
            roles: [
              { role: "admin", count: 1, sessions: 61, time: 296554 },
              { role: "user", count: 1, sessions: 1, time: 45292 }
            ],
            count: 2,
            sessions: 62,
            time: 341846
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 2,
        day: 26,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 105, time: 582806 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 108,
            time: 743687
          }
        ]
      },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 2,
        day: 26,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 4, time: 2123 }],
            count: 1,
            sessions: 4,
            time: 2123
          }
        ]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 2,
        day: 26,
        data: [
          { count: 1, time: 1594, name: "Windows", version: "10" },
          { count: 3, time: 529, name: "Mac OS", version: "10.15.7" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalBroadcastRooms: 0,
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 3,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 1,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-02-27T14:12:00.231Z",
      _updatedAt: "2024-02-27T14:12:00.231Z"
    },
    {
      _id: "65f305b0f581e473b5647131",
      wizard: {
        organizationType: "",
        industry: "",
        size: "",
        country: "",
        language: "",
        serverType: "",
        registerServer: false
      },
      uniqueId: "0ed5b1c7-8762-4603-badd-cf35f0e635d3",
      installedAt: "2024-02-14T14:34:30.521Z",
      deploymentFingerprintHash: "vmR/GJuaVBp1DVI0dGNf+mC5kN1FMIl5/LUv16hpgk0=",
      deploymentFingerprintVerified: true,
      version: "6.6.0",
      totalUsers: 5,
      activeUsers: 4,
      activeGuests: 0,
      nonActiveUsers: 0,
      appUsers: 0,
      onlineUsers: 1,
      awayUsers: 1,
      busyUsers: 0,
      totalConnectedUsers: 2,
      offlineUsers: 3,
      totalRooms: 4,
      userLanguages: { none: 5 },
      totalChannels: 1,
      totalPrivateGroups: 0,
      totalDirect: 3,
      totalLivechat: 0,
      totalDiscussions: 0,
      totalThreads: 0,
      totalLivechatVisitors: 0,
      totalLivechatAgents: 0,
      totalLivechatManagers: 0,
      livechatEnabled: true,
      isDepartmentRemovalEnabled: false,
      routingAlgorithm: "Auto_Selection",
      voipEnabled: false,
      omnichannelSources: [],
      totalTriggers: 0,
      archivedDepartments: 0,
      departments: 0,
      totalCustomFields: 0,
      emailInboxes: 0,
      BusinessHours: { total: 1, strategy: "" },
      chatsOnHold: 0,
      voipCalls: 0,
      voipExtensions: 0,
      voipSuccessfulCalls: 0,
      voipOnHoldCalls: 0,
      voipErrorCalls: 0,
      omnichannelContactsBySource: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastWeek: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfLastMonth: { contactsCount: 0, conversationsCount: 0, sources: [] },
      uniqueContactsOfYesterday: { contactsCount: 0, conversationsCount: 0, sources: [] },
      totalChannelMessages: 4,
      totalPrivateGroupMessages: 0,
      totalDiscussionsMessages: 0,
      totalDirectMessages: 9,
      totalLivechatMessages: 0,
      totalMessages: 13,
      lastLogin: "Wed Mar 13 2024 18:33:52 GMT+0000 (Coordinated Universal Time)",
      federatedServers: 0,
      federatedUsers: 0,
      lastMessageSentAt: "2024-03-07T02:00:01.784Z",
      lastSeenSubscription: "Wed Feb 21 2024 05:54:13 GMT+0000 (Coordinated Universal Time)",
      os: {
        type: "Linux",
        platform: "linux",
        arch: "x64",
        release: "5.10.165-143.735.amzn2.x86_64",
        uptime: 250447161e-2,
        loadavg: [0.08, 0.07, 0.02],
        totalmem: 4110323712,
        freemem: 471797760,
        cpus: [
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 10930010, nice: 5490, sys: 1787800, idle: 2479851840, irq: 0 }
          },
          {
            model: "Intel(R) Xeon(R) CPU E5-2686 v4 @ 2.30GHz",
            speed: 2300,
            times: { user: 11252740, nice: 6090, sys: 1801570, idle: 2480231430, irq: 0 }
          }
        ]
      },
      process: { nodeVersion: "v14.21.3", pid: 1, uptime: 250412537138199e-8 },
      deploy: { method: "docker", platform: "selfinstall" },
      readReceiptsEnabled: false,
      readReceiptsDetailed: false,
      enterpriseReady: true,
      uploadsTotal: 0,
      migration: {
        _id: "control",
        _updatedAt: "2024-02-14T14:36:52.304Z",
        locked: false,
        version: 304
      },
      instanceCount: 1,
      uploadsTotalSize: 0,
      msEnabled: false,
      oplogEnabled: true,
      mongoVersion: "5.0.15",
      mongoStorageEngine: "wiredTiger",
      apps: { engineVersion: "1.41.0", totalInstalled: 0, totalActive: 0, totalFailed: 0 },
      uniqueUsersOfYesterday: {
        year: 2024,
        month: 3,
        day: 13,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 13, time: 29694 }],
            count: 1,
            sessions: 13,
            time: 29694
          }
        ]
      },
      uniqueUsersOfLastWeek: {
        year: 2024,
        month: 3,
        day: 13,
        data: [
          {
            roles: [{ role: "admin", count: 1, sessions: 66, time: 95154 }],
            count: 1,
            sessions: 66,
            time: 95154
          }
        ]
      },
      uniqueUsersOfLastMonth: {
        year: 2024,
        month: 3,
        day: 13,
        data: [
          {
            roles: [
              { role: "admin", count: 3, sessions: 183, time: 718935 },
              { role: "user", count: 1, sessions: 3, time: 160881 }
            ],
            count: 4,
            sessions: 186,
            time: 879816
          }
        ]
      },
      uniqueDevicesOfYesterday: {
        year: 2024,
        month: 3,
        day: 13,
        data: [{ count: 13, time: 29694, type: "", name: "Chrome", version: "122.0.0" }]
      },
      uniqueDevicesOfLastWeek: {
        year: 2024,
        month: 3,
        day: 13,
        data: [{ count: 66, time: 95154, type: "", name: "Chrome", version: "122.0.0" }]
      },
      uniqueOSOfYesterday: {
        year: 2024,
        month: 3,
        day: 13,
        data: [{ count: 13, time: 29694, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueDevicesOfLastMonth: {
        year: 2024,
        month: 3,
        day: 13,
        data: [
          { count: 45, time: 455979, type: "browser", name: "Chrome", version: "121.0.0" },
          { count: 74, time: 297765, type: "", name: "Chrome", version: "121.0.0" },
          { count: 66, time: 95154, type: "", name: "Chrome", version: "122.0.0" },
          { count: 1, time: 30918, type: "other", name: "", version: "" }
        ]
      },
      uniqueOSOfLastWeek: {
        year: 2024,
        month: 3,
        day: 13,
        data: [{ count: 66, time: 95154, name: "Mac OS", version: "10.15.7" }]
      },
      uniqueOSOfLastMonth: {
        year: 2024,
        month: 3,
        day: 13,
        data: [
          { count: 45, time: 455979, name: "Windows", version: "10" },
          { count: 140, time: 392919, name: "Mac OS", version: "10.15.7" },
          { count: 1, time: 30918, name: "", version: "" }
        ]
      },
      services: {
        ldap: {
          users: 0,
          enabled: false,
          loginFallback: false,
          encryption: "plain",
          mergeUsers: false,
          syncAvatar: true,
          groupFilter: false,
          backgroundSync: {},
          ee: {}
        },
        saml: {
          enabled: false,
          users: 0,
          signatureValidationType: "All",
          generateUsername: false,
          updateSubscriptionsOnLogin: false
        },
        cas: { enabled: false, users: 0, allowUserCreation: true, alwaysSyncUserData: true },
        oauth: {
          apple: { enabled: false, users: 0 },
          dolphin: { enabled: false, users: 0 },
          drupal: { enabled: false, users: 0 },
          facebook: { enabled: false, users: 0 },
          github: { enabled: false, users: 0 },
          githubEnterprise: { enabled: false, users: 0 },
          gitlab: { enabled: false, users: 0 },
          google: { enabled: false, users: 0 },
          linkedin: { enabled: false, users: 0 },
          meteor: { enabled: false, users: 0 },
          nextcloud: { enabled: false, users: 0 },
          tokenpass: { enabled: false, users: 0 },
          twitter: { enabled: false, users: 0 },
          wordpress: { enabled: false, users: 0 },
          custom: {}
        }
      },
      importer: {
        totalCSVImportedUsers: 0,
        totalHipchatEnterpriseImportedUsers: 0,
        totalSlackImportedUsers: 0,
        totalSlackUsersImportedUsers: 0
      },
      videoConf: {
        videoConference: { started: 0, ended: 0 },
        direct: { calling: 0, started: 0, ended: 0 },
        livechat: { started: 0, ended: 0 },
        settings: { provider: "" }
      },
      dashboardCount: 0,
      messageAuditApply: 0,
      messageAuditLoad: 0,
      joinJitsiButton: 0,
      slashCommandsJitsi: 0,
      settings: {},
      integrations: {
        totalIntegrations: 0,
        totalIncoming: 0,
        totalIncomingActive: 0,
        totalOutgoing: 0,
        totalOutgoingActive: 0,
        totalWithScriptEnabled: 0
      },
      pushQueue: 0,
      enterprise: { modules: [], tags: [], seatRequests: 0 },
      totalOTRRooms: 0,
      totalOTR: 0,
      totalBroadcastRooms: 0,
      teams: { totalTeams: 0, totalRoomsInsideTeams: 0, totalDefaultRoomsInsideTeams: 0 },
      totalRoomsWithActiveLivestream: 0,
      totalTriggeredEmails: 0,
      totalRoomsWithStarred: 0,
      totalRoomsWithPinned: 0,
      totalUserTOTP: 0,
      totalUserEmail2fa: 4,
      totalPinned: 0,
      totalStarred: 0,
      totalLinkInvitation: 0,
      totalLinkInvitationUses: 0,
      totalEmailInvitation: 0,
      totalE2ERooms: 0,
      logoChange: false,
      showHomeButton: true,
      totalEncryptedMessages: 0,
      totalManuallyAddedUsers: 2,
      totalSubscriptionRoles: 3,
      totalUserRoles: 8,
      totalCustomRoles: 0,
      totalWebRTCCalls: 0,
      uncaughtExceptionsCount: 28,
      push: 3,
      homeTitleChanged: false,
      homeBodyChanged: false,
      customCSSChanged: false,
      onLogoutCustomScriptChanged: false,
      loggedOutCustomScriptChanged: false,
      loggedInCustomScriptChanged: false,
      dailyPeakConnections: 1,
      maxMonthlyPeakConnections: 3,
      matrixFederation: {
        enabled: false,
        maximumSizeOfPublicRoomsUsers: false,
        biggestRoom: null,
        smallestRoom: null,
        amountOfExternalUsers: 0,
        amountOfFederatedRooms: 0,
        externalConnectedServers: { quantity: 0, servers: [] }
      },
      webRTCEnabled: false,
      webRTCEnabledForOmnichannel: false,
      omnichannelWebRTCCalls: 0,
      createdAt: "2024-03-14T14:12:00.306Z",
      _updatedAt: "2024-03-14T14:12:00.307Z"
    }
  ]
};
const stats = data.statistics;
const counters = [
  { max: stats[0].totalUsers, label: "Users" },
  { max: stats[0].totalMessages, label: "Messages" },
  { max: stats[0].onlineUsers, label: "Online" }
];
const tilelinks = [
  [
    {
      title: "Documentation",
      desc: "Find in-depth information about Rocket.Chat features and API."
    },
    { title: "Learn", desc: "Learn about Rocket.Chat in an interactive course with quizzes!" }
  ],
  [
    { title: "Examples", desc: "Discover and deploy boilerplate example Rocket.Chat projects." },
    {
      title: "Deploy",
      desc: "Instantly deploy your Rocket.Chat site to a public URL with Rocket.Chat SaaS."
    }
  ]
];
const stories = [
  "cover-image-blog-11.jpg",
  "rocket-chat-funding.png",
  "frame-9.png",
  "whatsapp-safe-secure-message-blog.jpg"
];
const caption = "Get What You Need...";
const personas = ["Admin", "Developer", "Group chat", "GSoC"];
const images = [
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20viewBox%3D%220%200%2056%2060%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0.000305176%2050.7962H36.6102V41.8344C36.6063%2038.508%2035.2551%2035.3189%2032.853%2032.9668C30.4508%2030.6147%2027.1939%2029.2916%2023.7967%2029.2878H12.8138C9.41662%2029.2916%206.15972%2030.6147%203.75756%2032.9668C1.35541%2035.3189%200.004181%2038.508%200.000305176%2041.8344V50.7962Z%22%20fill%3D%22%23A5C9FF%22%2F%3E%3Cpath%20d%3D%22M5.49179%2012.8135C5.49179%2015.3477%206.24329%2017.8251%207.65125%2019.9322C9.05921%2022.0394%2011.0604%2023.6817%2013.4018%2024.6516C15.7431%2025.6214%2018.3195%2025.8751%2020.805%2025.3807C23.2906%2024.8863%2025.5737%2023.6659%2027.3657%2021.874C29.1577%2020.082%2030.3781%2017.7988%2030.8725%2015.3132C31.3669%2012.8277%2031.1132%2010.2513%2030.1434%207.90996C29.1735%205.56861%2027.5312%203.56742%2025.424%202.15946C23.3169%200.751497%2020.8395%200%2018.3053%200C14.9069%200%2011.6478%201.34999%209.24477%203.75298C6.84178%206.15597%205.49179%209.41512%205.49179%2012.8135V12.8135Z%22%20fill%3D%22%23A5C9FF%22%2F%3E%3Cpath%20d%3D%22M55%2040.2709C55%2037.8384%2053.0003%2035.8845%2050.5678%2035.8845H49.8517V31.8049C49.8517%2026.5718%2045.5421%2022.3389%2040.2713%2022.3389C35.0004%2022.3389%2030.6908%2026.5718%2030.6908%2031.8049V35.8845H29.9748C27.5423%2035.8845%2025.5426%2037.8384%2025.5426%2040.2709V53.8166C25.5426%2056.2491%2027.5423%2058.203%2029.9748%2058.203H50.5678C53.0003%2058.203%2055%2056.2491%2055%2053.8166V40.2709ZM36.123%2031.8049C36.123%2029.5692%2037.9725%2027.7253%2040.2713%2027.7253C42.5701%2027.7253%2044.4196%2029.5692%2044.4196%2031.8049V35.8845H36.123V31.8049Z%22%20fill%3D%22%231D74F5%22%20stroke%3D%22white%22%20strokeWidth%3D%222%22%2F%3E%3C%2Fsvg%3E",
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20viewBox%3D%220%200%2075%2056%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5.33333%208.11816C5.33333%205.99643%206.17618%203.9616%207.67647%202.46131C9.17677%200.961018%2011.2116%200.118164%2013.3333%200.118164H50.6667C52.7884%200.118164%2054.8232%200.961018%2056.3235%202.46131C57.8238%203.9616%2058.6667%205.99643%2058.6667%208.11816V29.4515C58.6667%2031.5732%2057.8238%2033.6081%2056.3235%2035.1084C54.8232%2036.6086%2052.7884%2037.4515%2050.6667%2037.4515H13.3333C11.2116%2037.4515%209.17677%2036.6086%207.67647%2035.1084C6.17618%2033.6081%205.33333%2031.5732%205.33333%2029.4515V8.11816Z%22%20fill%3D%22%23A5C9FF%22%2F%3E%3Cpath%20d%3D%22M2.66667%2042.7849C1.95942%2042.7849%201.28115%2043.0659%200.781049%2043.566C0.280952%2044.0661%200%2044.7443%200%2045.4516C0%2046.1588%200.280952%2046.8371%200.781049%2047.3372C1.28115%2047.8373%201.95942%2048.1182%202.66667%2048.1182H61.3333C62.0406%2048.1182%2062.7189%2047.8373%2063.219%2047.3372C63.7191%2046.8371%2064%2046.1588%2064%2045.4516C64%2044.7443%2063.7191%2044.0661%2063.219%2043.566C62.7189%2043.0659%2062.0406%2042.7849%2061.3333%2042.7849H2.66667Z%22%20fill%3D%22%23A5C9FF%22%2F%3E%3Cpath%20d%3D%22M73.7778%2045.564V54.0073H38V45.5634C38.0038%2042.3229%2039.2928%2039.2162%2041.5842%2036.9248C43.8756%2034.6334%2046.9823%2033.3444%2050.2228%2033.3406H61.555C64.7955%2033.3444%2067.9022%2034.6334%2070.1936%2036.9248C72.4851%2039.2163%2073.7741%2042.3233%2073.7778%2045.564Z%22%20fill%3D%22%231D74F5%22%20stroke%3D%22white%22%20strokeWidth%3D%222%22%2F%3E%3Cpath%20d%3D%22M45.7264%2022.1307C44.3834%2020.1208%2043.6666%2017.7577%2043.6666%2015.3404C43.6666%2012.0989%2044.9543%208.99009%2047.2464%206.69798C49.5386%204.40586%2052.6473%203.11816%2055.8889%203.11816C58.3062%203.11816%2060.6692%203.83499%2062.6792%205.17798C64.6891%206.52098%2066.2557%208.42984%2067.1808%2010.6632C68.1058%2012.8965%2068.3479%2015.354%2067.8763%2017.7249C67.4047%2020.0957%2066.2406%2022.2735%2064.5313%2023.9828C62.822%2025.6922%2060.6442%2026.8562%2058.2733%2027.3278C55.9024%2027.7994%2053.4449%2027.5574%2051.2116%2026.6323C48.9783%2025.7072%2047.0694%2024.1407%2045.7264%2022.1307Z%22%20fill%3D%22%231D74F5%22%20stroke%3D%22white%22%20strokeWidth%3D%222%22%2F%3E%3C%2Fsvg%3E",
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20viewBox%3D%220%200%2055%2054%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%206.11816C0%202.80445%202.68629%200.118164%206%200.118164H39.4286C42.7423%200.118164%2045.4286%202.80446%2045.4286%206.11816V27.6488C45.4286%2030.9625%2042.7423%2033.6488%2039.4286%2033.6488H6C2.68629%2033.6488%200%2030.9625%200%2027.6488V16.8835V6.11816Z%22%20fill%3D%22%23A5C9FF%22%2F%3E%3Cpath%20d%3D%22M0%2021.7527V18.5059C7.86871%2023.1957%2022.0324%2032.5753%2015.7374%2032.5753C7.86871%2032.5753%207.86871%2034.1987%203.93435%2039.0689C0.786871%2042.965%200%2040.6923%200%2039.0689V21.7527Z%22%20fill%3D%22%23A5C9FF%22%2F%3E%3Cpath%20d%3D%22M23.3061%2012.0977H47C50.866%2012.0977%2054%2015.2317%2054%2019.0977V29.2149V39.3321C54%2043.1981%2050.866%2046.3321%2047%2046.3321H23.3061C19.4401%2046.3321%2016.3061%2043.1981%2016.3061%2039.3321V19.0977C16.3061%2015.2317%2019.4401%2012.0977%2023.3061%2012.0977Z%22%20fill%3D%22%231D74F5%22%20stroke%3D%22white%22%20strokeWidth%3D%222%22%2F%3E%3Cpath%20d%3D%22M53%2034.5775V31.4854C47.0985%2035.9518%2036.4757%2044.8848%2041.1969%2044.8848C47.0985%2044.8848%2047.0985%2046.4309%2050.0492%2051.0692C52.4098%2054.7798%2053%2052.6153%2053%2051.0692V34.5775Z%22%20fill%3D%22%231D74F5%22%2F%3E%3C%2Fsvg%3E",
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20viewBox%3D%220%200%2068%2054%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M37.7778%2042.4295H68V34.8739C67.9968%2032.0695%2066.8814%2029.3809%2064.8983%2027.3978C62.9153%2025.4148%2060.2267%2024.2993%2057.4222%2024.2961H48.3556C45.5511%2024.2993%2042.8625%2025.4148%2040.8795%2027.3978C38.8964%2029.3809%2037.781%2032.0695%2037.7778%2034.8739V42.4295Z%22%20fill%3D%22%238EBAFA%22%2F%3E%3Cpath%20d%3D%22M42.3112%2010.696C42.3112%2012.7881%2042.9315%2014.8332%2044.0938%2016.5727C45.2561%2018.3122%2046.9082%2019.668%2048.841%2020.4686C50.7738%2021.2692%2052.9007%2021.4787%2054.9526%2021.0705C57.0045%2020.6624%2058.8893%2019.6549%2060.3686%2018.1756C61.8479%2016.6963%2062.8554%2014.8115%2063.2635%2012.7596C63.6716%2010.7077%2063.4622%208.58085%2062.6616%206.64801C61.861%204.71517%2060.5052%203.06315%2058.7657%201.90084C57.0262%200.738541%2054.981%200.118164%2052.889%200.118164C50.0835%200.118164%2047.393%201.23261%2045.4093%203.21633C43.4256%205.20005%2042.3112%207.89055%2042.3112%2010.696V10.696Z%22%20fill%3D%22%238EBAFA%22%2F%3E%3Cpath%20d%3D%22M0%2042.8072H30.2223V35.2516C30.2191%2032.4472%2029.1036%2029.7586%2027.1206%2027.7755C25.1375%2025.7925%2022.4489%2024.677%2019.6445%2024.6738H10.5778C7.77337%2024.677%205.08473%2025.7925%203.1017%2027.7755C1.11867%2029.7586%200.00319957%2032.4472%200%2035.2516V42.8072Z%22%20fill%3D%22%238EBAFA%22%2F%3E%3Cpath%20d%3D%22M4.53339%2011.0739C4.53339%2013.166%205.15376%2015.2111%206.31607%2016.9506C7.47837%2018.6901%209.1304%2020.0459%2011.0632%2020.8465C12.9961%2021.6471%2015.1229%2021.8566%2017.1748%2021.4484C19.2267%2021.0403%2021.1115%2020.0329%2022.5908%2018.5535C24.0701%2017.0742%2025.0776%2015.1894%2025.4857%2013.1375C25.8939%2011.0856%2025.6844%208.95878%2024.8838%207.02594C24.0832%205.0931%2022.7274%203.44108%2020.9879%202.27877C19.2484%201.11647%2017.2033%200.496094%2015.1112%200.496094C12.3058%200.496094%209.61527%201.61054%207.63155%203.59426C5.64783%205.57798%204.53339%208.26848%204.53339%2011.0739V11.0739Z%22%20fill%3D%22%238EBAFA%22%2F%3E%3Cpath%20d%3D%22M51.889%2043.9419V52.3852H16.1111V43.9413C16.115%2040.7008%2017.404%2037.5941%2019.6954%2035.3027C21.9868%2033.0113%2025.0935%2031.7224%2028.334%2031.7185H39.6662C42.9067%2031.7224%2046.0134%2033.0113%2048.3048%2035.3027C50.5963%2037.5943%2051.8853%2040.7012%2051.889%2043.9419Z%22%20fill%3D%22%231D74F5%22%20stroke%3D%22white%22%20strokeWidth%3D%222%22%2F%3E%3Cpath%20d%3D%22M23.8376%2020.5084C22.4946%2018.4985%2021.7778%2016.1354%2021.7778%2013.7181C21.7778%2010.4766%2023.0655%207.36778%2025.3576%205.07566C27.6497%202.78355%2030.7585%201.49585%2034%201.49585C36.4173%201.49585%2038.7804%202.21267%2040.7903%203.55567C42.8003%204.89867%2044.3668%206.80752%2045.2919%209.04084C46.217%2011.2742%2046.459%2013.7317%2045.9874%2016.1025C45.5158%2018.4734%2044.3518%2020.6512%2042.6424%2022.3605C40.9331%2024.0698%2038.7553%2025.2339%2036.3845%2025.7055C34.0136%2026.1771%2031.5561%2025.935%2029.3228%2025.01C27.0894%2024.0849%2025.1806%2022.5183%2023.8376%2020.5084Z%22%20fill%3D%22%231D74F5%22%20stroke%3D%22white%22%20strokeWidth%3D%222%22%2F%3E%3C%2Fsvg%3E"
];
function Card($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "body", "color", "inverse", "outline", "theme"]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  let body = fallback($$props["body"], false);
  let color = fallback($$props["color"], "");
  let inverse = fallback($$props["inverse"], false);
  let outline = fallback($$props["outline"], false);
  let theme = fallback($$props["theme"], void 0);
  classes = classnames(className, "card", inverse ? "text-white" : false, body ? "card-body" : false, color ? `${outline ? "border" : "bg"}-${color}` : false);
  $$payload.out += `<div${spread_attributes(
    {
      ...$$restProps,
      "data-bs-theme": theme,
      class: clsx(classes)
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className, body, color, inverse, outline, theme });
  pop();
}
function FormCheck($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "checked",
    "disabled",
    "group",
    "id",
    "inline",
    "inner",
    "invalid",
    "label",
    "name",
    "reverse",
    "size",
    "type",
    "valid",
    "value"
  ]);
  push();
  let classes, inputClasses, idFor;
  let className = fallback($$props["class"], "");
  let checked = fallback($$props["checked"], false);
  let disabled = fallback($$props["disabled"], false);
  let group = fallback($$props["group"], void 0);
  let id = fallback($$props["id"], void 0);
  let inline = fallback($$props["inline"], false);
  let inner = fallback($$props["inner"], void 0);
  let invalid = fallback($$props["invalid"], false);
  let label = fallback($$props["label"], "");
  let name = fallback($$props["name"], "");
  let reverse = fallback($$props["reverse"], false);
  let size = fallback($$props["size"], "");
  let type = fallback($$props["type"], "checkbox");
  let valid = fallback($$props["valid"], false);
  let value = fallback($$props["value"], void 0);
  classes = classnames(className, "form-check", {
    "form-check-reverse": reverse,
    "form-switch": type === "switch",
    "form-check-inline": inline,
    [`form-control-${size}`]: size
  });
  inputClasses = classnames("form-check-input", { "is-invalid": invalid, "is-valid": valid });
  idFor = id || label;
  $$payload.out += `<div${attr_class(clsx(classes))}>`;
  if (type === "radio") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<input${spread_attributes(
      {
        ...$$restProps,
        class: clsx(inputClasses),
        id: idFor,
        type: "radio",
        checked: group === value,
        disabled,
        name,
        value
      }
    )}/>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (type === "switch") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<input${spread_attributes(
        {
          ...$$restProps,
          class: clsx(inputClasses),
          id: idFor,
          type: "checkbox",
          checked,
          disabled,
          name,
          value
        }
      )}/>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<input${spread_attributes(
        {
          ...$$restProps,
          class: clsx(inputClasses),
          id: idFor,
          type: "checkbox",
          checked,
          disabled,
          name,
          value
        }
      )}/>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> `;
  if (label) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<label class="form-check-label"${attr("for", idFor)}><!---->`;
    slot($$payload, $$props, "label", {}, () => {
      $$payload.out += `${escape_html(label)}`;
    });
    $$payload.out += `<!----></label>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, {
    class: className,
    checked,
    disabled,
    group,
    id,
    inline,
    inner,
    invalid,
    label,
    name,
    reverse,
    size,
    type,
    valid,
    value
  });
  pop();
}
function FormFeedback($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "valid", "tooltip"]);
  push();
  let className = fallback($$props["class"], "");
  let valid = fallback($$props["valid"], void 0);
  let tooltip = fallback($$props["tooltip"], false);
  let classes;
  {
    const validMode = tooltip ? "tooltip" : "feedback";
    classes = classnames(className, valid ? `valid-${validMode}` : `invalid-${validMode}`);
  }
  $$payload.out += `<div${spread_attributes({ ...$$restProps, class: clsx(classes) })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className, valid, tooltip });
  pop();
}
function Input($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "bsSize",
    "checked",
    "color",
    "disabled",
    "feedback",
    "files",
    "group",
    "inner",
    "invalid",
    "label",
    "max",
    "min",
    "multiple",
    "name",
    "placeholder",
    "plaintext",
    "readonly",
    "reverse",
    "size",
    "theme",
    "type",
    "valid",
    "value"
  ]);
  push();
  let className = fallback($$props["class"], "");
  let bsSize = fallback($$props["bsSize"], void 0);
  let checked = fallback($$props["checked"], false);
  let color = fallback($$props["color"], void 0);
  let disabled = fallback($$props["disabled"], void 0);
  let feedback = fallback($$props["feedback"], void 0);
  let files = fallback($$props["files"], void 0);
  let group = fallback($$props["group"], void 0);
  let inner = fallback($$props["inner"], void 0);
  let invalid = fallback($$props["invalid"], false);
  let label = fallback($$props["label"], void 0);
  let max = fallback($$props["max"], void 0);
  let min = fallback($$props["min"], void 0);
  let multiple = fallback($$props["multiple"], void 0);
  let name = fallback($$props["name"], "");
  let placeholder = fallback($$props["placeholder"], "");
  let plaintext = fallback($$props["plaintext"], false);
  let readonly = fallback($$props["readonly"], void 0);
  let reverse = fallback($$props["reverse"], false);
  let size = fallback($$props["size"], void 0);
  let theme = fallback($$props["theme"], void 0);
  let type = fallback($$props["type"], "text");
  let valid = fallback($$props["valid"], false);
  let value = fallback($$props["value"], void 0);
  let classes;
  let tag;
  {
    const isNotaNumber = new RegExp("\\D", "g");
    let isBtn = false;
    let formControlClass = "form-control";
    tag = "input";
    switch (type) {
      case "color":
        formControlClass = `form-control form-control-color`;
        break;
      case "range":
        formControlClass = "form-range";
        break;
      case "select":
        formControlClass = `form-select`;
        tag = "select";
        break;
      case "textarea":
        tag = "textarea";
        break;
      case "button":
      case "reset":
      case "submit":
        formControlClass = `btn btn-${color || "secondary"}`;
        isBtn = true;
        break;
      case "hidden":
      case "image":
        formControlClass = void 0;
        break;
      default:
        formControlClass = "form-control";
        tag = "input";
    }
    if (plaintext) {
      formControlClass = `${formControlClass}-plaintext`;
      tag = "input";
    }
    if (size && isNotaNumber.test(size)) {
      console.warn(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`);
      bsSize = size;
      size = void 0;
    }
    classes = classnames(className, formControlClass, {
      "is-invalid": invalid,
      "is-valid": valid,
      [`form-control-${bsSize}`]: bsSize && !isBtn && tag !== "select",
      [`form-select-${bsSize}`]: bsSize && tag === "select",
      [`btn-${bsSize}`]: bsSize && isBtn
    });
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    if (tag === "input") {
      $$payload2.out += "<!--[-->";
      if (type === "text" || type === "password" || type === "search" || type === "tel" || type === "url") {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<input${spread_attributes(
          {
            ...$$restProps,
            ...{ type },
            "data-bs-theme": theme,
            class: clsx(classes),
            value,
            disabled,
            name,
            placeholder,
            readonly,
            size
          }
        )}/>`;
      } else {
        $$payload2.out += "<!--[!-->";
        if (type === "color") {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<input${spread_attributes(
            {
              ...$$restProps,
              "data-bs-theme": theme,
              class: clsx(classes),
              type: "color",
              value,
              disabled,
              name,
              placeholder,
              readonly
            }
          )}/>`;
        } else {
          $$payload2.out += "<!--[!-->";
          if (type === "email") {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<input${spread_attributes(
              {
                ...$$restProps,
                "data-bs-theme": theme,
                class: clsx(classes),
                type: "email",
                value,
                disabled,
                multiple,
                name,
                placeholder,
                readonly,
                size
              }
            )}/>`;
          } else {
            $$payload2.out += "<!--[!-->";
            if (type === "file") {
              $$payload2.out += "<!--[-->";
              $$payload2.out += `<input${spread_attributes(
                {
                  ...$$restProps,
                  "data-bs-theme": theme,
                  class: clsx(classes),
                  type: "file",
                  disabled,
                  invalid,
                  multiple,
                  name,
                  placeholder,
                  readonly,
                  valid
                }
              )}/>`;
            } else {
              $$payload2.out += "<!--[!-->";
              if (type === "checkbox" || type === "radio" || type === "switch") {
                $$payload2.out += "<!--[-->";
                FormCheck($$payload2, spread_props([
                  $$restProps,
                  {
                    "data-bs-theme": theme,
                    class: className,
                    size: bsSize,
                    type,
                    disabled,
                    invalid,
                    label,
                    name,
                    placeholder,
                    reverse,
                    readonly,
                    valid,
                    get checked() {
                      return checked;
                    },
                    set checked($$value) {
                      checked = $$value;
                      $$settled = false;
                    },
                    get inner() {
                      return inner;
                    },
                    set inner($$value) {
                      inner = $$value;
                      $$settled = false;
                    },
                    get group() {
                      return group;
                    },
                    set group($$value) {
                      group = $$value;
                      $$settled = false;
                    },
                    get value() {
                      return value;
                    },
                    set value($$value) {
                      value = $$value;
                      $$settled = false;
                    }
                  }
                ]));
              } else {
                $$payload2.out += "<!--[!-->";
                if (type === "date" || type === "datetime" || type === "datetime-local" || type === "month" || type === "number" || type === "time" || type === "range" || type === "week") {
                  $$payload2.out += "<!--[-->";
                  $$payload2.out += `<input${spread_attributes(
                    {
                      ...$$restProps,
                      ...{ type },
                      "data-bs-theme": theme,
                      class: clsx(classes),
                      value,
                      disabled,
                      max,
                      min,
                      name,
                      placeholder,
                      readonly
                    }
                  )}/>`;
                } else {
                  $$payload2.out += "<!--[!-->";
                  $$payload2.out += `<input${spread_attributes(
                    {
                      ...$$restProps,
                      "data-bs-theme": theme,
                      class: clsx(classes),
                      ...{ type },
                      value,
                      name,
                      disabled,
                      placeholder,
                      readonly
                    }
                  )}/>`;
                }
                $$payload2.out += `<!--]-->`;
              }
              $$payload2.out += `<!--]-->`;
            }
            $$payload2.out += `<!--]-->`;
          }
          $$payload2.out += `<!--]-->`;
        }
        $$payload2.out += `<!--]-->`;
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
      if (tag === "textarea") {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<textarea${spread_attributes(
          {
            ...$$restProps,
            "data-bs-theme": theme,
            class: clsx(classes),
            disabled,
            name,
            placeholder,
            readonly
          }
        )}>`;
        const $$body = escape_html(value);
        if ($$body) {
          $$payload2.out += `${$$body}`;
        }
        $$payload2.out += `</textarea>`;
      } else {
        $$payload2.out += "<!--[!-->";
        if (tag === "select" && !multiple) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<select${spread_attributes(
            {
              ...$$restProps,
              "data-bs-theme": theme,
              class: clsx(classes),
              name,
              disabled,
              readonly
            }
          )}>`;
          $$payload2.select_value = {
            ...$$restProps,
            value
          }?.value;
          $$payload2.out += `<!---->`;
          slot($$payload2, $$props, "default", {}, null);
          $$payload2.out += `<!---->`;
          $$payload2.select_value = void 0;
          $$payload2.out += `</select>`;
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]-->`;
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!--]--> `;
    if (feedback) {
      $$payload2.out += "<!--[-->";
      if (Array.isArray(feedback)) {
        $$payload2.out += "<!--[-->";
        const each_array = ensure_array_like(feedback);
        $$payload2.out += `<!--[-->`;
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let msg = each_array[$$index];
          FormFeedback($$payload2, {
            valid,
            children: ($$payload3) => {
              $$payload3.out += `<!---->${escape_html(msg)}`;
            },
            $$slots: { default: true }
          });
        }
        $$payload2.out += `<!--]-->`;
      } else {
        $$payload2.out += "<!--[!-->";
        FormFeedback($$payload2, {
          valid,
          children: ($$payload3) => {
            $$payload3.out += `<!---->${escape_html(feedback)}`;
          },
          $$slots: { default: true }
        });
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    class: className,
    bsSize,
    checked,
    color,
    disabled,
    feedback,
    files,
    group,
    inner,
    invalid,
    label,
    max,
    min,
    multiple,
    name,
    placeholder,
    plaintext,
    readonly,
    reverse,
    size,
    theme,
    type,
    valid,
    value
  });
  pop();
}
function InputGroup($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "size", "theme"]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  let size = fallback($$props["size"], "");
  let theme = fallback($$props["theme"], null);
  classes = classnames(className, "input-group", size ? `input-group-${size}` : null);
  $$payload.out += `<div${spread_attributes(
    {
      ...$$restProps,
      class: clsx(classes),
      "data-bs-theme": theme
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className, size, theme });
  pop();
}
function InputGroupText($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  classes = classnames(className, "input-group-text");
  $$payload.out += `<span${spread_attributes({ ...$$restProps, class: clsx(classes) })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></span>`;
  bind_props($$props, { class: className });
  pop();
}
function Herounit($$payload, $$props) {
  let { title, subtitle } = $$props;
  Styles($$payload, {});
  $$payload.out += `<!----> <div class="hero-container svelte-rr49m9">`;
  Container($$payload, {
    children: ($$payload2) => {
      Row($$payload2, {
        children: ($$payload3) => {
          Col($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<h1 class="svelte-rr49m9">${html(title)}</h1>`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Row($$payload2, {
        children: ($$payload3) => {
          Col($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<p class="subtitle svelte-rr49m9">${escape_html(subtitle)}</p>`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Docslink($$payload, $$props) {
  let { leftlink: leftlink2, rightlink: rightlink2 } = $$props;
  Styles($$payload, {});
  $$payload.out += `<!----> <div class="links-container svelte-nr8u81">`;
  Container($$payload, {
    children: ($$payload2) => {
      Row($$payload2, {
        children: ($$payload3) => {
          Col($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<p class="links-text svelte-nr8u81">${escape_html(leftlink2)} <span class="separator svelte-nr8u81">|</span> ${escape_html(rightlink2)}</p>`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Searchbar($$payload, $$props) {
  push();
  let { searchactions: searchactions2 } = $$props;
  Styles($$payload, {});
  $$payload.out += `<!----> <div class="search-container svelte-y46xb0">`;
  Container($$payload, {
    children: ($$payload2) => {
      Row($$payload2, {
        class: "justify-content-center",
        children: ($$payload3) => {
          Col($$payload3, {
            md: "8",
            lg: "6",
            children: ($$payload4) => {
              $$payload4.out += `<span class="search-wrapper svelte-y46xb0">`;
              InputGroup($$payload4, {
                children: ($$payload5) => {
                  InputGroupText($$payload5, {
                    class: "input-group-prepend",
                    children: ($$payload6) => {
                      Dropdown($$payload6, {
                        children: ($$payload7) => {
                          DropdownToggle($$payload7, {
                            nav: true,
                            caret: true,
                            children: ($$payload8) => {
                              $$payload8.out += `<!---->${escape_html(searchactions2.menu.top)}`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!----> `;
                          DropdownMenu($$payload7, {
                            children: ($$payload8) => {
                              const each_array = ensure_array_like(searchactions2.menu.dropdown);
                              $$payload8.out += `<!--[-->`;
                              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                                let item = each_array[$$index];
                                if (item.label == "---") {
                                  $$payload8.out += "<!--[-->";
                                  DropdownItem($$payload8, { divider: true });
                                } else {
                                  $$payload8.out += "<!--[!-->";
                                  DropdownItem($$payload8, {
                                    children: ($$payload9) => {
                                      $$payload9.out += `<!---->${escape_html(item.label)}`;
                                    },
                                    $$slots: { default: true }
                                  });
                                }
                                $$payload8.out += `<!--]-->`;
                              }
                              $$payload8.out += `<!--]-->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!---->`;
                        },
                        $$slots: { default: true }
                      });
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  Input($$payload5, {
                    placeholder: searchactions2.placeholder,
                    class: "search-input"
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></span>`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  pop();
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function linear(t) {
  return t;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function quadOut(t) {
  return -t * (t - 2);
}
function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = (
      /** @type {Array<any>} */
      b.map((bi, i) => {
        return get_interpolator(
          /** @type {Array<any>} */
          a[i],
          bi
        );
      })
    );
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b) {
      throw new Error("Object cannot be null");
    }
    if (is_date(a) && is_date(b)) {
      const an = a.getTime();
      const bn = b.getTime();
      const delta = bn - an;
      return (t) => new Date(an + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = (
      /** @type {number} */
      b - /** @type {number} */
      a
    );
    return (t) => a + t * delta;
  }
  return () => b;
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    target_value = new_value;
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = linear,
      interpolate = get_interpolator
    } = { ...defaults, ...opts };
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = raf.now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start) return true;
      if (!started) {
        fn = interpolate(
          /** @type {any} */
          value,
          new_value
        );
        if (typeof duration === "function")
          duration = duration(
            /** @type {any} */
            value,
            new_value
          );
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(
      /** @type {any} */
      target_value,
      /** @type {any} */
      value
    ), opts),
    subscribe: store.subscribe
  };
}
function Statscounters($$payload, $$props) {
  push();
  var $$store_subs;
  let { counters: counters2 } = $$props;
  const c1 = tweened(0, { duration: 3e3, easing: cubicOut });
  const c2 = tweened(0, { duration: 5e3, easing: quadOut });
  const c3 = tweened(0, { duration: 3900, easing: linear });
  c1.set(counters2[0].max);
  c2.set(counters2[1].max);
  c3.set(counters2[2].max);
  Styles($$payload, {});
  $$payload.out += `<!----> <div class="stats-container svelte-w6ymlt">`;
  Container($$payload, {
    children: ($$payload2) => {
      Row($$payload2, {
        children: ($$payload3) => {
          Col($$payload3, {
            md: "4",
            class: "stats-col",
            children: ($$payload4) => {
              $$payload4.out += `<div class="stats-item svelte-w6ymlt"><span class="counter countup svelte-w6ymlt">${escape_html(Math.round(store_get($$store_subs ??= {}, "$c1", c1)))}</span> <div class="label svelte-w6ymlt">${escape_html(counters2[0].label)}</div></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Col($$payload3, {
            md: "4",
            class: "stats-col",
            children: ($$payload4) => {
              $$payload4.out += `<div class="stats-item svelte-w6ymlt"><span class="counter countup svelte-w6ymlt">${escape_html(Math.round(store_get($$store_subs ??= {}, "$c2", c2)))}</span> <div class="label svelte-w6ymlt">${escape_html(counters2[1].label)}</div></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Col($$payload3, {
            md: "4",
            class: "stats-col",
            children: ($$payload4) => {
              $$payload4.out += `<div class="stats-item svelte-w6ymlt"><span class="counter countup svelte-w6ymlt">${escape_html(Math.round(store_get($$store_subs ??= {}, "$c3", c3)))}</span> <div class="label svelte-w6ymlt">${escape_html(counters2[2].label)}</div></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Simonlinktiles($$payload, $$props) {
  push();
  let { tilelinks: tilelinks2 } = $$props;
  Styles($$payload, {});
  $$payload.out += `<!----> <div class="tiles-container svelte-6u9qip">`;
  Container($$payload, {
    fluid: true,
    children: ($$payload2) => {
      const each_array = ensure_array_like(tilelinks2);
      $$payload2.out += `<!--[-->`;
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        each_array[i];
        Row($$payload2, {
          class: "tiles-row justify-content-center",
          children: ($$payload3) => {
            const each_array_1 = ensure_array_like(tilelinks2[i]);
            $$payload3.out += `<!--[-->`;
            for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
              let item = each_array_1[$$index];
              Col($$payload3, {
                xs: "12",
                sm: "6",
                md: "4",
                lg: "3",
                class: "tile-col",
                children: ($$payload4) => {
                  Card($$payload4, {
                    body: true,
                    class: "tile-card",
                    children: ($$payload5) => {
                      $$payload5.out += `<h3 class="tile-title svelte-6u9qip">${escape_html(item.title)}</h3> <p class="tile-desc svelte-6u9qip">${escape_html(item.desc)}</p>`;
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
            }
            $$payload3.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  pop();
}
function Arrow($$payload, $$props) {
  let { direction } = $$props;
  $$payload.out += `<svg viewBox="0 0 30.725 30.725"${attr_style("", { transform: direction == "right" ? "rotate(180deg)" : "" })}><path fill="currentColor" d="M23.078,15.362a0.77,0.77,0,0,1-0.77,0.77H11.54l3.3,3.3a0.77,0.77,0,0,1-1.088,1.088l-4.85-4.85a0.77,0.77,0,0,1,0-1.089l4.85-4.85a0.77,0.77,0,1,1,1.088,1.088l-3.3,3.3h10.768a0.77,0.77,0,0,1,0.77,0.77Z"></path></svg>`;
}
function TinySlider($$payload, $$props) {
  push();
  let {
    gap = "0",
    fill = true,
    transitionDuration = 300,
    threshold = 30,
    currentIndex = 0,
    shown = [],
    sliderWidth = 0,
    currentScrollPosition = 0,
    maxWidth = 0,
    reachedEnd = false,
    distanceToEnd = 0,
    end = () => null,
    change = (index) => null,
    children,
    controls
  } = $$props;
  let isDragging = false;
  let passedThreshold = false;
  let contentElement = void 0;
  onDestroy(() => {
  });
  function setIndex(i) {
    const length = contentElement.children.length;
    if (i < 0) i = 0;
    if (i > length - 1) i = length - 1;
    snapToPosition({ setIndex: i });
    setShown();
  }
  function snapToPosition({ setIndex: setIndex2 = -1, direction = 1 } = {}) {
    const offsets = getItemOffsets();
    const startIndex = currentIndex;
    currentIndex = 0;
    let i;
    for (i = 0; i < offsets.length; i++) {
      if (setIndex2 != -1) {
        if (i >= setIndex2) break;
      } else if (direction > 0 && offsets[i] > currentScrollPosition || direction < 0 && offsets[i + 1] > currentScrollPosition) {
        break;
      }
    }
    currentIndex = Math.min(i, getContentChildren().length - 1);
    setScrollPosition(offsets[currentIndex], true);
    if (change && currentIndex != startIndex) change(currentIndex);
  }
  function setScrollPosition(left, limit = false) {
    currentScrollPosition = left;
    const endSize = maxWidth - sliderWidth;
    reachedEnd = currentScrollPosition >= endSize;
    if (!reachedEnd) return;
    if (end) end();
    if (fill && limit) currentScrollPosition = endSize;
  }
  function setShown() {
    const offsets = getItemOffsets();
    Array.from(offsets).forEach((offset, index) => {
      if (currentScrollPosition + sliderWidth < offset) return;
      if (!shown.includes(index)) shown = [...shown, index];
    });
  }
  function getItemOffsets() {
    return getContentChildren().map((item) => item.offsetLeft);
  }
  function getContentChildren() {
    return Array.from(contentElement.children).filter((c) => c.src != "about:blank");
  }
  $$payload.out += `<div${attr_class("slider svelte-1qcjdmu", void 0, { "dragging": isDragging, "passed-threshold": passedThreshold })} tabindex="-1"><div tabindex="0" class="slider-content svelte-1qcjdmu"${attr_style("", {
    transform: `translateX(${stringify(currentScrollPosition * -1)}px)`,
    "transition-duration": `${stringify(transitionDuration)}ms`,
    "--gap": parseFloat(gap || "0") ? gap : null
  })}>`;
  children?.($$payload, {
    sliderWidth,
    shown,
    currentIndex,
    setIndex,
    currentScrollPosition,
    maxWidth,
    reachedEnd,
    distanceToEnd
  });
  $$payload.out += `<!----></div></div> `;
  controls?.($$payload, {
    sliderWidth,
    shown,
    currentIndex,
    setIndex,
    currentScrollPosition,
    maxWidth,
    reachedEnd,
    distanceToEnd
  });
  $$payload.out += `<!---->`;
  bind_props($$props, {
    currentIndex,
    shown,
    sliderWidth,
    currentScrollPosition,
    maxWidth,
    reachedEnd,
    distanceToEnd,
    setIndex
  });
  pop();
}
function Carousel($$payload, $$props) {
  push();
  let { stories: stories2 } = $$props;
  const n = stories2.length;
  const itemsPerView = 3;
  let sw = 0;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Styles($$payload2, {});
    $$payload2.out += `<!----> <div class="carousel-container svelte-xuw1wk"><div class="carousel-heading svelte-xuw1wk">Latest <span class="red-text">Community</span> News</div> `;
    Container($$payload2, {
      children: ($$payload3) => {
        Row($$payload3, {
          children: ($$payload4) => {
            Col($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<div class="tiny-slider-wrapper svelte-xuw1wk">`;
                {
                  let children = function($$payload6, { currentIndex }) {
                    const each_array = ensure_array_like(stories2);
                    $$payload6.out += `<!--[-->`;
                    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
                      let item = each_array[i];
                      if (i >= currentIndex) {
                        $$payload6.out += "<!--[-->";
                        $$payload6.out += `<div class="item-container svelte-xuw1wk"${attr_style(`width: ${stringify(sw / itemsPerView)}px;`)}><img${attr("src", item.imageUrl)}${attr("width", sw / itemsPerView)}${attr("alt", `alt_img_${stringify(item.id)}`)}/> <div class="item-text svelte-xuw1wk"><span class="headline svelte-xuw1wk">${escape_html(item.name)}</span> <div class="description svelte-xuw1wk">${escape_html(item.description)}</div></div></div>`;
                      } else {
                        $$payload6.out += "<!--[!-->";
                      }
                      $$payload6.out += `<!--]-->`;
                    }
                    $$payload6.out += `<!--]-->`;
                  }, controls = function($$payload6, { setIndex, currentIndex }) {
                    const each_array_1 = ensure_array_like(Array(Math.ceil(n / itemsPerView)));
                    $$payload6.out += `<button class="prev svelte-xuw1wk">`;
                    Arrow($$payload6, { direction: "left" });
                    $$payload6.out += `<!----></button> <button class="next svelte-xuw1wk">`;
                    Arrow($$payload6, { direction: "right" });
                    $$payload6.out += `<!----></button> <div class="btn-container svelte-xuw1wk"><!--[-->`;
                    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
                      each_array_1[i];
                      $$payload6.out += `<button${attr_class("car-btn svelte-xuw1wk", void 0, { "active": i === currentIndex })}${attr("aria-label", `Go to page ${i + 1}`)}></button>`;
                    }
                    $$payload6.out += `<!--]--></div>`;
                  };
                  TinySlider($$payload5, {
                    gap: "10px",
                    get sliderWidth() {
                      return sw;
                    },
                    set sliderWidth($$value) {
                      sw = $$value;
                      $$settled = false;
                    },
                    children,
                    controls,
                    $$slots: { default: true, controls: true }
                  });
                }
                $$payload5.out += `<!----></div>`;
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function Personatiles($$payload, $$props) {
  push();
  let { caption: caption2, personas: personas2, images: images2 } = $$props;
  Styles($$payload, {});
  $$payload.out += `<!----> <div class="personas-container svelte-1awyaes">`;
  Container($$payload, {
    children: ($$payload2) => {
      Row($$payload2, {
        class: "justify-content-center",
        children: ($$payload3) => {
          Col($$payload3, {
            xs: "6",
            sm: "3",
            children: ($$payload4) => {
              $$payload4.out += `<span class="persona svelte-1awyaes"><div class="svg svelte-1awyaes"><img${attr("src", images2[0])} class="d-block w-100 svelte-1awyaes" alt="Admin"/></div> <div class="title svelte-1awyaes">${escape_html(personas2[0])}</div></span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Col($$payload3, {
            xs: "6",
            sm: "3",
            children: ($$payload4) => {
              $$payload4.out += `<span class="persona svelte-1awyaes"><div class="svg svelte-1awyaes"><img${attr("src", images2[1])} class="d-block w-100 svelte-1awyaes" alt="Developer"/></div> <div class="title svelte-1awyaes">${escape_html(personas2[1])}</div></span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Col($$payload3, {
            xs: "6",
            sm: "3",
            children: ($$payload4) => {
              $$payload4.out += `<span class="persona svelte-1awyaes"><div class="svg svelte-1awyaes"><img${attr("src", images2[2])} class="d-block w-100 svelte-1awyaes" alt="Group Chat"/></div> <div class="title svelte-1awyaes">${escape_html(personas2[2])}</div></span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Col($$payload3, {
            xs: "6",
            sm: "3",
            children: ($$payload4) => {
              $$payload4.out += `<span class="persona svelte-1awyaes"><div class="svg svelte-1awyaes"><img${attr("src", images2[3])} class="d-block w-100 svelte-1awyaes" alt="GSoC"/></div> <div class="title svelte-1awyaes">${escape_html(personas2[3])}</div></span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  Carousel as C,
  Docslink as D,
  Herounit as H,
  Personatiles as P,
  Searchbar as S,
  Statscounters as a,
  Simonlinktiles as b,
  counters as c,
  herotitle as d,
  searchactions as e,
  caption as f,
  herosub as h,
  images as i,
  leftlink as l,
  personas as p,
  rightlink as r,
  stories as s,
  tilelinks as t
};
