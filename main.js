// main.js für German Language Pack - Vollständige Übersetzung

module.exports.metadata = {
    name: "German Language Pack",
    version: "1.0.0",
    description: "Komplette deutsche Übersetzung für Nexo Maker",
    author: "Dein Name",
    id: "german-language-pack",
    apiKey: "nmk_Vpb0maBfN5HYcPFjawujlD8_bdcvnIUhr0neFc7gweY"
};

module.exports.init = function(api) {
    const nm = api.nexomaker;
    
    // Vollständige deutsche Übersetzungen
    nm.postLanguage({
        local: 'de',
        label: 'Deutsch',
        
        // Sidebar Navigation
        sidebar: {
            create_item: 'Objekt Erstellen',
            create_weapon: 'Waffe Erstellen',
            create_block: 'Block Erstellen',
            create_furniture: 'Möbel Erstellen',
            dashboard: 'Dashboard',
            projects: 'Projekte',
            marketplace: 'Marktplatz',
            settings: 'Einstellungen',
            help: 'Hilfe',
            community: 'Community',
            documentation: 'Dokumentation',
            support: 'Support'
        },
        
        // Projektfenster
        project_window: {
            new_project: 'Neues Projekt',
            import_project: 'Projekt Importieren',
            user_profile: 'Benutzerprofil',
            logout: 'Abmelden',
            upgrade: 'Upgraden',
            update_available: 'Update verfügbar: {version}',
            update: 'Aktualisieren',
            loading_projects: 'Projekte werden geladen...',
            matching_projects: 'Übereinstimmende Projekte',
            projects: 'Projekte',
            search_placeholder: 'Projekte durchsuchen...',
            project_format: 'Projektformat',
            project_name: 'Projektname',
            last_modification: 'Letzte Änderung',
            version: 'Version',
            no_projects_loaded: 'Keine Projekte geladen',
            author: 'Autor',
            plugins: 'Plugins',
            label_empty: 'Leer',
            drop_plugins: 'Plugins hier ablegen',
            plugins_list: 'Plugin-Liste',
            project_file: 'Projektdatei',
            drop_project_file: 'Projektdatei hier ablegen',
            details: 'Details',
            plugins_optional: 'Plugins (Optional)',
            review: 'Überprüfen',
            eula_accept: 'EULA akzeptieren',
            none: 'Keine',
            language: 'Sprache',
            
            // Erweiterte Übersetzungen
            save: 'Speichern',
            save_as: 'Speichern unter',
            cancel: 'Abbrechen',
            delete: 'Löschen',
            edit: 'Bearbeiten',
            settings: 'Einstellungen',
            help: 'Hilfe',
            about: 'Über',
            confirm: 'Bestätigen',
            warning: 'Warnung',
            error: 'Fehler',
            success: 'Erfolg',
            loading: 'Laden...',
            processing: 'Verarbeitung...',
            done: 'Fertig',
            back: 'Zurück',
            next: 'Weiter',
            finish: 'Fertigstellen',
            create: 'Erstellen',
            open: 'Öffnen',
            close: 'Schließen',
            refresh: 'Aktualisieren',
            download: 'Herunterladen',
            upload: 'Hochladen',
            export: 'Exportieren',
            import: 'Importieren',
            rename: 'Umbenennen',
            duplicate: 'Duplizieren',
            move: 'Verschieben',
            copy: 'Kopieren',
            paste: 'Einfügen',
            undo: 'Rückgängig',
            redo: 'Wiederholen',
            find: 'Suchen',
            replace: 'Ersetzen',
            select_all: 'Alle auswählen',
            deselect_all: 'Auswahl aufheben',
            properties: 'Eigenschaften',
            information: 'Informationen',
            status: 'Status',
            progress: 'Fortschritt',
            complete: 'Abgeschlossen',
            pending: 'Ausstehend',
            failed: 'Fehlgeschlagen',
            unknown: 'Unbekannt',
            enabled: 'Aktiviert',
            disabled: 'Deaktiviert',
            yes: 'Ja',
            no: 'Nein',
            ok: 'OK',
            apply: 'Anwenden',
            reset: 'Zurücksetzen',
            default: 'Standard',
            custom: 'Benutzerdefiniert',
            advanced: 'Erweitert',
            basic: 'Einfach',
            options: 'Optionen',
            preferences: 'Einstellungen'
        },
        
        // Editor-Bereich
        editor: {
            undo: 'Rückgängig',
            redo: 'Wiederholen',
            cut: 'Ausschneiden',
            copy: 'Kopieren',
            paste: 'Einfügen',
            select_all: 'Alle auswählen',
            find: 'Suchen',
            replace: 'Ersetzen',
            zoom_in: 'Vergrößern',
            zoom_out: 'Verkleinern',
            zoom_reset: 'Zoom zurücksetzen',
            grid: 'Raster',
            snap: 'Einrasten',
            align: 'Ausrichten',
            distribute: 'Verteilen',
            group: 'Gruppieren',
            ungroup: 'Gruppierung aufheben',
            lock: 'Sperren',
            unlock: 'Entsperren',
            show: 'Anzeigen',
            hide: 'Ausblenden'
        },
        
        // Datei-Menü
        file_menu: {
            new: 'Neu',
            open: 'Öffnen',
            save: 'Speichern',
            save_as: 'Speichern unter',
            export: 'Exportieren',
            import: 'Importieren',
            recent: 'Zuletzt verwendet',
            close: 'Schließen',
            close_all: 'Alle schließen',
            exit: 'Beenden'
        },
        
        // Kontextmenü
        context_menu: {
            cut: 'Ausschneiden',
            copy: 'Kopieren',
            paste: 'Einfügen',
            delete: 'Löschen',
            rename: 'Umbenennen',
            duplicate: 'Duplizieren',
            properties: 'Eigenschaften',
            share: 'Teilen',
            download: 'Herunterladen'
        },
        
        // Dialoge und Benachrichtigungen
        dialogs: {
            confirm_title: 'Bestätigung erforderlich',
            confirm_message: 'Sind Sie sicher?',
            warning_title: 'Warnung',
            error_title: 'Fehler aufgetreten',
            success_title: 'Erfolg',
            info_title: 'Information',
            unsaved_changes: 'Ungespeicherte Änderungen vorhanden',
            discard_changes: 'Änderungen verwerfen?',
            save_changes: 'Möchten Sie die Änderungen speichern?',
            delete_confirm: 'Möchten Sie dies wirklich löschen?',
            delete_confirm_multiple: 'Möchten Sie diese Elemente wirklich löschen?'
        }
    });
    
    console.log('🇩🇪 German Language Pack erfolgreich geladen!');
    console.log('📝 Alle UI-Elemente sind jetzt auf Deutsch verfügbar.');
};