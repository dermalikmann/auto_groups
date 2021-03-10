OC.L10N.register(
    "auto_groups",
    {
    "Group \"%1$s\" is used in the Auto Groups App and cannot be deleted." : "Skupina „%1$s“ je používána v aplikaci Automatické skupiny a proto ji nelze smazat.",
    "Auto Groups" : "Automatické skupiny",
    "Automatically adds all users to one or multiple specified groups." : "Automaticky přidá všechny uživatele do jedné či více zadaných skupin.",
    "Automatically add users to the specified Auto Groups, except those users belonging to one of the specified Override Groups. \nOptionally, the group assignment can be triggered on every successful login, which is useful for external user backends.\n\n## Configuration\n\n- Go to \"Admin Settings > Additional Settings\"\n- Configure the Auto Groups\n- If required, configure the Override Groups (e.g., for Service Accounts)\n- Optionally, enable the Login Hook, which will enforce correct group membership on every successful login\n\nNote that this app prevents group deletions for groups referenced as Auto Groups or Override Groups.\n\n## Comparison to similar Apps\n\n* [Everyone Group](https://apps.nextcloud.com/apps/group_everyone): The \"Everyone Group\" app adds a virtual Group Backend, always returning all users. In contrast, \"Auto Groups\" operates on \"real\" groups in your normal Group Backend. Additionally, it is possible to specify Override Groups which will prevent users from being added to the Auto Group(s).\n* [Default Group](https://apps.nextcloud.com/apps/defaultgroup): \"Auto Groups\" is actually a modernized and maintaned fork of \"Default Group\", which seems to be abandoned since NC12 or so. In terms of functionality, they are almost identical.\n\nIn addition, I plan to add some more features over time, e.g., \"Union Groups\" - see the [Milestone Plans](https://github.com/stjosh/auto_groups/milestones) for more details." : "Automatické přidávání uživatelů do zadaných automatických skupin, s výjimkou uživatelů, kteří náleží do jedné nebo více přepisujících skupin. \nVolitelně může být přiřazování do skupin spouštěno při každém úspěšném přihlášení, což se hodí pro účty z externích systémů.\n\n## Nastavení\n\n- Jděte do „Nastavení správy > Další nastavení“\n- Nastavit automatické skupiny“\n- Pokud je potřeba, nastavte přepisující skupiny (např. pro servisní účty)\n- Volitelně zapněte zaháčkování na přihlášení, což vynutí správné členství ve skupinách při každém úspěšném přihlášení\n\nVšimněte si, že tato aplikace brání smazání skupin, na které je odkazováno jako na automatické nebo přepisující.\n\n## Porovnání s podobnými aplikacemi\n\n* [Skupina Všichni](https://apps.nextcloud.com/apps/group_everyone): Aplikace „Skupina Všichni“ přidává podpůrnou vrstvu virtuální skupiny, která vrací vždy všechny uživatele. Oproti tomu aplikace „Automatické skupiny“ pracuje se „skutečnými“ skupinami v běžné podpůrné vrstvě správy skupin. Je také možné určit přepisující skupiny, což zabrání, aby uživatelé byly přidáváni do automatických skupin.\n* [Výchozí skupina](https://apps.nextcloud.com/apps/defaultgroup): Aplikace „Automatické skupiny“ je ve skutečnosti modernizovaná a udržovaná odvozenina od „Výchozí skupiny“, které bylo dle všeho opuštěno v době NC12 či tak nějak. Ohledně funkcí, ty jsou téměř stejné.\n\nKrom toho je v plánu v budoucnu přidat několik dalších funkcí, např. „Union skupiny“ – podrobnosti viz [Milestone Plans](https://github.com/stjosh/auto_groups/milestones). ",
    "Auto Groups:" : "Automatické skupiny:",
    "Automatically add all users to these groups." : "Automaticky přidat všechny uživatele do těchto skupin.",
    "Override Groups:" : "Přepsat skupiny:",
    "Users which are member of at least one of these groups are removed from the auto groups. This is also the case if the user is added to one of these groups after creation, i.e., membership in the override groups is checked after each group modification." : "Uživatelé, kteří jsou členy alespoň jedné z těchto skupin jsou odebráni z automatických skupin. Toto je také případ, pokud je uživatel přidán do jedné z těchto skupin po vytvoření, tj. členství v přepisujících skupinách je kontrolováno pro každé změně ve skupině.",
    "Check for correct Auto Group membership on every login." : "Kontrolovat správnost členství v automatických skupinách při každém přihlášení.",
    "Enable this setting to enforce proper Auto Group membership on every successful login. This is useful if either users are not created in Nextcloud (e.g., with external user backends) or to enforce correct group membership for all users when the Auto Groups / Override Groups have changed." : "Toto nastavení zapněte pro vynucení správného členství v automatických skupinách při každém úspěšném přihlášení. Toto se hodí pokud uživatel buďto není vytvořený v Nextcloud (např. v případě uživatelů z externích systémů) nebo pro vynucení správného členství ve skupinách pro všechny uživatele, když se automatické / přepisující skupiny změní.",
    "Only check for Auto Group membership on user creation." : "Automatické členství ve skupinách kontrolovat pouze při vytváření uživatele.",
    "If checked, Auto Group membership will not be re-enforced on subsequent user modifications." : "Pokud je zaškrtnuto, automatické členství ve skupinách nebude znovu vynucováno při následných úpravách uživatelského účtu."
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
