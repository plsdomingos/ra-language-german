module.exports = {
    ra: {
        action: {
            delete: 'Löschen',
            show: 'Anzeigen',
            list: 'Liste',
            save: 'Speichern',
            create: 'Erstellen',
            edit: 'Bearbeiten',
            sort: 'Sortieren',
            cancel: 'Abbrechen',
            undo: 'Zurücksetzen',
            refresh: 'Aktualisieren',
            add: 'Neu',
            remove: 'Entfernen',
            add_filter: 'Filter hinzufügen',
            remove_filter: 'Filter entfernen',
            back: 'Zurück',
            bulk_actions: 'Ein Element ausgewählt |||| %{smart_count} Elemente ausgewählt',
            clear_input_value: 'Eingabe löschen',
            clone: 'Klonen',
            export: 'Exportieren',
            search: 'Suchen',
        },
        boolean: {
            true: 'Ja',
            false: 'Nein',
        },
        page: {
            list: '%{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: '%{name} erstellen',
            delete: '%{name} #%{id} löschen',
            dashboard: 'Dashboard',
            not_found: 'Nicht gefunden',
            error: 'Etwas ist schief gelaufen',
        },
        input: {
            file: {
                upload_several: 'Zum Hochladen Dateien hineinziehen oder hier klicken, um Dateien auszuwählen.',
                upload_single: 'Zum Hochladen Datei hineinziehen oder hier klicken, um eine Datei auszuwählen.',
            },
            image: {
                upload_several: 'Zum Hochladen Bilder hineinziehen oder hier klicken, um Bilder auszuwählen.',
                upload_single: 'Zum Hochladen Bild hineinziehen oder hier klicken, um eine Bild auszuwählen.',
            },
            references: {
                all_missing: 'Die zugehörigen Referenzen konnten nicht gefunden werden.',
                many_missing: 'Mindestens eine der zugehörigen Referenzen scheint nicht mehr verfügbar zu sein.',
                single_missing: 'Eine zugehörige Referenz scheint nicht mehr verfügbar zu sein.',
            },
        },
        message: {
            yes: 'Ja',
            no: 'Nein',
            are_you_sure: 'Bist du sicher?',
            about: 'Über',
            not_found: 'Die Seite konnte nicht gefunden werden.',
            loading: 'Die Seite wird geladen.',
            invalid_form: 'Das Formular ist ungültig. Bitte überprüfen Sie ihre Eingaben.',
            delete_title: 'Lösche %{name} #%{id}',
            delete_content: 'Möchten Sie diesen Inhalt wirklich löschen?',
            bulk_delete_title: 'Lösche %{name} |||| Lösche %{smart_count} %{name} Elemente',
            bulk_delete_content: 'Möchten Sie "%{name}" wirklich löschen? |||| Möchten Sie diese %{smart_count} Elemente wirklich löschen?',
            error: 'Ein Fehler ist aufgetreten und ihre Anfrage konnte nicht abgeschlossen werden.',
        },
        navigation: {
            no_results: 'Keine Resultate gefunden',
            no_more_results: 'Die Seite %{page} enthält keine Inhalte.',
            page_out_of_boundaries: 'Die Seite %{page} liegt ausserhalb des gültigen Bereichs',
            page_out_from_end: 'Letzte Seite',
            page_out_from_begin: 'Erste Seite',
            page_range_info: '%{offsetBegin}-%{offsetEnd} von %{total}',
            page_rows_per_page: 'Zeilen pro Seite:',
            next: 'Weiter',
            prev: 'Zurück',
        },
        auth: {
            user_menu: 'Profil',
            username: 'Nutzername',
            password: 'Passwort',
            sign_in: 'Anmelden',
            sign_in_error: 'Fehler bei der Anmeldung',
            logout: 'Abmelden',
        },
        notification: {
            updated: 'Element wurde aktualisiert |||| %{smart_count} Elemente wurden aktualisiert',
            created: 'Element wurde erstellt',
            deleted: 'Element wurde gelöscht |||| %{smart_count} Elemente wurden gelöscht',
            bad_item: 'Fehlerhaftes Elemente',
            item_doesnt_exist: 'Das Element existiert nicht',
            http_error: 'Fehler beim Kommunizieren mit dem Server',
            canceled: 'Aktion abgebrochen',
        },
        validation: {
            required: 'Benötigt',
            minLength: 'Muss mindestens %{min} Zeichen lang sein',
            maxLength: 'Darf maximal %{max} Zeichen lang sein',
            minValue: 'Muss mindestens %{min} sein',
            maxValue: 'Muss %{max} oder weniger sein',
            number: 'Muss eine Nummer sein',
            email: 'Muss eine gültige E-Mail sein',
            oneOf: 'Es muss einer sein von: %{options}',
            regex: 'Es muss folgendem, regulären Ausdruck entsprechen: %{pattern}',        },
    },
};
