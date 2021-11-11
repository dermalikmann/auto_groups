OC.L10N.register(
    "auto_groups",
    {
    "Group \"%1$s\" is used in the Auto Groups App and cannot be deleted." : "Gruppe \"%1$s\" bruges i Auto Groups-appen og kan ikke slettes.",
    "Auto Groups" : "Autogrupper",
    "Automatically adds all users to one or multiple specified groups." : "Føjer automatisk alle brugere til en eller flere specificerede grupper.",
    "Automatically add users to the specified Auto Groups, except those users belonging to one of the specified Override Groups. \nOptionally, the group assignment can be triggered on every successful login, which is useful for external user backends.\n\n## Configuration\n\n- Go to \"Admin Settings > Additional Settings\"\n- Configure the Auto Groups\n- If required, configure the Override Groups (e.g., for Service Accounts)\n- Optionally, enable the Login Hook, which will enforce correct group membership on every successful login\n\nNote that this app prevents group deletions for groups referenced as Auto Groups or Override Groups.\n\n## Comparison to similar Apps\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): The \"Everyone Group\" app adds a virtual Group Backend, always returning all users. In contrast, \"Auto Groups\" operates on \"real\" groups in your normal Group Backend. Additionally, it is possible to specify Override Groups which will prevent users from being added to the Auto Group(s).\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" is actually a modernized and maintaned fork of \"Default Group\", which seems to be abandoned since NC12 or so. In terms of functionality, they are almost identical.\n\nIn addition, I plan to add some more features over time, e.g., \"Union Groups\" - see the [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) for more details." : "Tilføj automatisk brugere til de angivne automatiske grupper, undtagen de brugere, der tilhører en af ​​de angivne tilsidesættelsesgrupper.\nEventuelt kan gruppetildelingen udløses ved hvert vellykket login, hvilket er nyttigt for eksterne brugere.\n\n## Konfiguration\n\n- Gå til \"Administrationsindstillinger > Yderligere indstillinger\"\n- Konfigurer de automatiske grupper\n- Konfigurer om nødvendigt tilsidesættelsesgrupperne (f.eks. for servicekonti)\n- Aktiver eventuelt Login Hook, som vil håndhæve korrekt gruppemedlemskab ved hvert vellykket login\n\nBemærk, at denne app forhindrer gruppesletninger for grupper, der refereres til som automatiske grupper eller tilsidesætte grupper.\n\n## Sammenligning med lignende apps\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): Appen \"Everyone Group\" tilføjer en virtuel gruppebackend og returnerer altid alle brugere. I modsætning hertil fungerer \"Auto Groups\" på \"rigtige\" grupper i din normale gruppebackend. Derudover er det muligt at angive Tilsidesæt-grupper, som forhindrer brugere i at blive tilføjet til de automatiske grupper.\n* [Standardgruppe](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" er faktisk en moderniseret og vedligeholdt forgrening af \"Default Group\", som ser ud til at være forladt siden NC12 eller deromkring. Med hensyn til funktionalitet er de næsten identiske.\n\nDerudover planlægger jeg at tilføje nogle flere funktioner over tid, f.eks. \"Union Groups\" - se [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) for flere detaljer.",
    "Auto Groups:" : "Automatiske grupper:",
    "Automatically add all users to these groups." : "Føj automatisk alle brugere til disse grupper.",
    "Override Groups:" : "Tilsidesæt grupper:",
    "Users which are member of at least one of these groups are removed from the auto groups. This is also the case if the user is added to one of these groups after creation, i.e., membership in the override groups is checked after each group modification." : "Brugere, der er medlem af mindst én af disse grupper, fjernes fra autogrupperne. Dette er også tilfældet, hvis brugeren føjes til en af disse grupper efter oprettelse, dvs. medlemskab af tilsidesættelsesgrupperne kontrolleres efter hver gruppeændring.",
    "Check for correct Auto Group membership on every login." : "Tjek for korrekt autogruppemedlemskab ved hvert login.",
    "Enable this setting to enforce proper Auto Group membership on every successful login. This is useful if either users are not created in Nextcloud (e.g., with external user backends) or to enforce correct group membership for all users when the Auto Groups / Override Groups have changed." : "Aktiver denne indstilling for at gennemtvinge korrekt autogruppemedlemskab ved hvert vellykket login. Dette er nyttigt, hvis enten brugere ikke er oprettet i Nextcloud (f.eks. med eksterne bruger-backends) eller for at håndhæve korrekt gruppemedlemskab for alle brugere, når de automatiske grupper/tilsidesæt-grupper er ændret.",
    "Only check for Auto Group membership on user creation." : "Tjek kun for automatisk gruppemedlemskab ved oprettelse af bruger.",
    "If checked, Auto Group membership will not be re-enforced on subsequent user modifications." : "Hvis det er markeret, vil Auto Group-medlemskab ikke blive genhævet ved efterfølgende brugerændringer."
},
"nplurals=2; plural=(n != 1);");
