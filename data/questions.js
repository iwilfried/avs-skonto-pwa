// AVS – Anti-Vergessen-System
// Thema: Skonto, Zahlungsverkehr, Buchungssätze & Jahresabschluss
// Zeitliche Erfolgsabgrenzung – 50 Lernkarten für IHK-Prüfung

const AVS_QUESTIONS = [

  // ══════════════════════════════════════════════════════════════════════════
  // BLOCK 1: SKONTO – GRUNDLAGEN & BERECHNUNG
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 1,
    category: "Skonto",
    topic: "Definition Skonto",
    difficulty: "leicht",
    question: "Was ist Skonto und wer gewährt es?",
    shortAnswer: "Skonto ist ein Preisnachlass auf den Rechnungsbetrag, den der Verkäufer dem Käufer gewährt, wenn dieser innerhalb einer bestimmten Frist zahlt.",
    longAnswer: "Skonto (ital. sconto = Abzug):\n\n• Definition: Prozentualer Nachlass auf den Rechnungsbetrag bei frühzeitiger Zahlung\n• Gewährt von: Verkäufer/Lieferant (Gläubiger)\n• Erhält: Käufer/Kunde (Schuldner)\n\nZweck:\n• Für den Verkäufer: Schnellere Liquidität, geringeres Ausfallrisiko\n• Für den Käufer: Kostenersparnis, günstiger als Kredit\n\nTypische Formulierung auf Rechnungen:\n'Zahlungsbedingungen: 10 Tage 2% Skonto, 30 Tage netto'\n→ Bei Zahlung innerhalb von 10 Tagen: 2% Abzug erlaubt\n→ Bei Zahlung innerhalb von 30 Tagen: voller Betrag fällig\n\nAbgrenzung:\n• Skonto ≠ Rabatt (Rabatt = Mengen-/Treuerabatt ohne Zeitbedingung)\n• Skonto ≠ Bonus (Bonus = nachträgliche Vergütung am Jahresende)",
    tags: ["#Skonto", "#Grundlagen", "#Zahlungsverkehr"],
    hint: "Skonto = Preisnachlass bei frühzeitiger Zahlung"
  },
  {
    id: 2,
    category: "Skonto",
    topic: "Skonto berechnen – Käufersicht",
    difficulty: "leicht",
    question: "Eine Rechnung lautet über 5.000 € netto. Der Lieferant gewährt 2% Skonto bei Zahlung innerhalb von 10 Tagen. Wie viel zahlt der Käufer bei Skontonutzung?",
    shortAnswer: "4.900 €. Skontobetrag: 5.000 € × 2% = 100 €. Zahlbetrag: 5.000 € − 100 € = 4.900 €",
    longAnswer: "Rechenweg:\n\nGegeben:\n• Rechnungsbetrag: 5.000 € (netto)\n• Skontosatz: 2%\n\nSchritt 1: Skontobetrag berechnen\n• Skonto = Rechnungsbetrag × Skontosatz\n• Skonto = 5.000 € × 0,02 = 100 €\n\nSchritt 2: Zahlbetrag berechnen\n• Zahlbetrag = Rechnungsbetrag − Skonto\n• Zahlbetrag = 5.000 € − 100 € = 4.900 €\n\nAlternativ (direkt):\n• Zahlbetrag = 5.000 € × (1 − 0,02) = 5.000 € × 0,98 = 4.900 €\n\nMerke: Skonto wird immer vom Rechnungsbetrag (ohne MwSt.) berechnet, sofern nicht anders angegeben.",
    tags: ["#Skonto", "#Berechnung", "#Käufer"],
    hint: "Skonto = Betrag × Skontosatz. Zahlbetrag = Betrag − Skonto"
  },
  {
    id: 3,
    category: "Skonto",
    topic: "Skonto mit MwSt.",
    difficulty: "mittel",
    question: "Rechnung: 4.000 € netto + 19% MwSt. = 4.760 € brutto. Skonto 3% bei Zahlung in 10 Tagen. Wie hoch ist der Zahlbetrag brutto?",
    shortAnswer: "4.617,20 €. Skonto vom Bruttobetrag: 4.760 € × 3% = 142,80 €. Zahlbetrag: 4.760 € − 142,80 € = 4.617,20 €",
    longAnswer: "Rechenweg (Skonto vom Bruttobetrag):\n\nGegeben:\n• Nettobetrag: 4.000 €\n• MwSt. 19%: 760 €\n• Bruttobetrag: 4.760 €\n• Skontosatz: 3%\n\nSchritt 1: Skonto vom Bruttobetrag\n• Skonto = 4.760 € × 0,03 = 142,80 €\n\nSchritt 2: Zahlbetrag\n• Zahlbetrag = 4.760 € − 142,80 € = 4.617,20 €\n\nAufschlüsselung:\n• Netto nach Skonto: 4.000 € × 0,97 = 3.880 €\n• MwSt. auf 3.880 €: 737,20 €\n• Brutto nach Skonto: 4.617,20 € ✓\n\nWichtig: In der Buchführung wird Skonto auf den Nettobetrag gebucht, die MwSt. wird entsprechend korrigiert!",
    tags: ["#Skonto", "#MwSt", "#Berechnung"],
    hint: "Skonto vom Bruttobetrag berechnen, dann MwSt.-Korrektur beachten"
  },
  {
    id: 4,
    category: "Skonto",
    topic: "Effektiver Jahreszins Skonto",
    difficulty: "schwer",
    question: "Zahlungsbedingung: '10 Tage 2% Skonto, 30 Tage netto'. Wie hoch ist der effektive Jahreszins, wenn man das Skonto NICHT nutzt?",
    shortAnswer: "ca. 36,7% p.a. Formel: (Skontosatz / (100 − Skontosatz)) × (360 / (Nettotage − Skontotage))",
    longAnswer: "Effektiver Jahreszins (Skonto-Verzicht = teurer Kredit):\n\nFormel:\ni = (s / (100 − s)) × (360 / (n − t))\n\nWobei:\n• s = Skontosatz = 2%\n• n = Nettotage = 30\n• t = Skontotage = 10\n\nRechnung:\ni = (2 / (100 − 2)) × (360 / (30 − 10))\ni = (2 / 98) × (360 / 20)\ni = 0,02041 × 18\ni = 0,3673 = 36,73% p.a.\n\nInterpretation:\nWer das Skonto NICHT nutzt, zahlt faktisch 36,73% Jahreszinsen für einen 20-tägigen Zahlungsaufschub.\n\nFaustregel: Skonto fast immer günstiger als Kontokorrentkredit (6–12% p.a.)!\nEmpfehlung: Skonto IMMER nutzen, wenn Liquidität vorhanden.",
    tags: ["#Skonto", "#Jahreszins", "#Kalkulation"],
    hint: "Formel: (s/(100-s)) × (360/(Nettotage-Skontotage))"
  },
  {
    id: 5,
    category: "Skonto",
    topic: "Skonto vs. Rabatt",
    difficulty: "leicht",
    question: "Was ist der Unterschied zwischen Skonto, Rabatt und Bonus? Nennen Sie je ein Beispiel.",
    shortAnswer: "Rabatt = Mengenabzug sofort. Skonto = Zeitabzug bei früher Zahlung. Bonus = nachträgliche Vergütung am Jahresende.",
    longAnswer: "Preisnachlässe im Überblick:\n\n1. Rabatt\n• Sofortiger Abzug vom Listenpreis\n• Grund: Menge, Treue, Sonderaktion\n• Beispiel: 'Ab 100 Stück: 5% Mengenrabatt'\n• Zeitpunkt: Bei Rechnungsstellung\n\n2. Skonto\n• Abzug bei frühzeitiger Zahlung\n• Grund: Schnelle Liquidität für Verkäufer\n• Beispiel: '2% Skonto bei Zahlung in 10 Tagen'\n• Zeitpunkt: Bei Zahlung (innerhalb Frist)\n\n3. Bonus\n• Nachträgliche Vergütung\n• Grund: Erreichen von Umsatzzielen\n• Beispiel: '3% Jahresbonus ab 50.000 € Umsatz'\n• Zeitpunkt: Am Jahresende / Periodenende\n\nMerkhilfe:\nR-S-B = Rechnungsdatum → Skontofrist → Bonusperiode\n(zeitliche Reihenfolge der Gewährung)",
    tags: ["#Skonto", "#Rabatt", "#Bonus", "#Grundlagen"],
    hint: "Rabatt=Menge/sofort, Skonto=Zeit/Zahlung, Bonus=Jahresende"
  },
  {
    id: 6,
    category: "Skonto",
    topic: "Skontosatz berechnen",
    difficulty: "mittel",
    question: "Ein Käufer zahlt 9.800 € statt 10.000 €. Wie hoch ist der Skontosatz?",
    shortAnswer: "2%. Skonto = 10.000 − 9.800 = 200 €. Skontosatz = 200 / 10.000 × 100 = 2%",
    longAnswer: "Rückwärtsrechnung Skontosatz:\n\nGegeben:\n• Rechnungsbetrag: 10.000 €\n• Zahlbetrag: 9.800 €\n\nSchritt 1: Skontobetrag ermitteln\n• Skonto = 10.000 − 9.800 = 200 €\n\nSchritt 2: Skontosatz berechnen\n• Skontosatz = (Skonto / Rechnungsbetrag) × 100\n• Skontosatz = (200 / 10.000) × 100 = 2%\n\nProbe:\n• 10.000 € × 2% = 200 € Skonto ✓\n• 10.000 − 200 = 9.800 € Zahlbetrag ✓",
    tags: ["#Skonto", "#Berechnung", "#Rückwärtsrechnung"],
    hint: "Skontosatz = (Skontobetrag / Rechnungsbetrag) × 100"
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BLOCK 2: BUCHUNGSSÄTZE SKONTO
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 7,
    category: "Buchungssätze",
    topic: "Erhaltener Skonto (Käufer)",
    difficulty: "mittel",
    question: "Ein Käufer erhält eine Rechnung über 5.000 € netto + 950 € MwSt. = 5.950 € brutto. Er zahlt innerhalb der Skontofrist und zieht 2% Skonto ab. Wie lautet der Buchungssatz beim Käufer?",
    shortAnswer: "Verbindlichkeiten 5.950 € an Bank 5.831 €, Skontoertrag (Erhaltene Skonti) 100 €, Vorsteuer 19 € (Korrektur)",
    longAnswer: "Buchungssatz beim KÄUFER (erhaltener Skonto):\n\nAusgangsdaten:\n• Bruttobetrag: 5.950 €\n• Nettobetrag: 5.000 €\n• MwSt. 19%: 950 €\n• Skonto 2% auf Netto: 5.000 × 2% = 100 €\n• MwSt.-Korrektur: 100 × 19% = 19 €\n• Zahlbetrag: 5.950 − 100 − 19 = 5.831 €\n\nBuchungssatz:\nVerbindlichkeiten a.L.L.  5.950 €\n  an Bank                         5.831 €\n  an Skontoertrag                   100 €\n  an Vorsteuer (Korrektur)           19 €\n\nKonten:\n• Skontoertrag = Konto 2650 (SKR03) / 4730 (SKR04)\n• Vorsteuer wird gemindert (da Bemessungsgrundlage sinkt)\n\nMerke: Erhaltener Skonto = ERTRAG für den Käufer → GuV-wirksam",
    tags: ["#Buchungssatz", "#Skonto", "#Käufer", "#MwSt"],
    hint: "Käufer: Verbindlichkeiten an Bank + Skontoertrag + Vorsteuerkorrektur"
  },
  {
    id: 8,
    category: "Buchungssätze",
    topic: "Gewährter Skonto (Verkäufer)",
    difficulty: "mittel",
    question: "Ein Verkäufer hat eine Forderung über 5.950 € brutto (5.000 € netto + 950 € MwSt.). Der Kunde zahlt mit 2% Skonto. Wie lautet der Buchungssatz beim Verkäufer?",
    shortAnswer: "Bank 5.831 €, Skontoaufwand 100 €, Umsatzsteuer 19 € an Forderungen a.L.L. 5.950 €",
    longAnswer: "Buchungssatz beim VERKÄUFER (gewährter Skonto):\n\nAusgangsdaten:\n• Forderung brutto: 5.950 €\n• Nettobetrag: 5.000 €\n• MwSt. 19%: 950 €\n• Skonto 2% auf Netto: 100 €\n• MwSt.-Korrektur: 19 €\n• Eingang: 5.831 €\n\nBuchungssatz:\nBank                      5.831 €\nSkontoaufwand               100 €\nUmsatzsteuer (Korrektur)     19 €\n  an Forderungen a.L.L.          5.950 €\n\nKonten:\n• Skontoaufwand = Konto 2650 (SKR03) / 8730 (SKR04)\n• Umsatzsteuer wird gemindert (Bemessungsgrundlage sinkt)\n\nMerke: Gewährter Skonto = AUFWAND für den Verkäufer → GuV-wirksam\n\nEselsbrücke:\nKäufer ERHÄLT Skonto → Ertrag\nVerkäufer GEWÄHRT Skonto → Aufwand",
    tags: ["#Buchungssatz", "#Skonto", "#Verkäufer", "#MwSt"],
    hint: "Verkäufer: Bank + Skontoaufwand + USt-Korrektur an Forderungen"
  },
  {
    id: 9,
    category: "Buchungssätze",
    topic: "Wareneinkauf mit Skonto",
    difficulty: "mittel",
    question: "Wareneinkauf auf Ziel: 3.000 € netto + 570 € MwSt. = 3.570 € brutto. Buchungssatz beim Einkauf und bei Zahlung mit 2% Skonto.",
    shortAnswer: "Einkauf: Wareneingang 3.000 + Vorsteuer 570 an Verbindlichkeiten 3.570. Zahlung: Verbindlichkeiten 3.570 an Bank 3.498,60 + Skontoertrag 60 + Vorsteuer 11,40",
    longAnswer: "Zwei Buchungssätze:\n\n1. Buchungssatz bei WARENEINGANG:\nWareneingang (Einkauf)  3.000 €\nVorsteuer               570 €\n  an Verbindlichkeiten a.L.L.  3.570 €\n\n2. Buchungssatz bei ZAHLUNG (mit 2% Skonto):\nSkonto: 3.000 × 2% = 60 €\nMwSt.-Korrektur: 60 × 19% = 11,40 €\nZahlbetrag: 3.570 − 60 − 11,40 = 3.498,60 €\n\nVerbindlichkeiten a.L.L.  3.570,00 €\n  an Bank                      3.498,60 €\n  an Skontoertrag                 60,00 €\n  an Vorsteuer                    11,40 €\n\nKontrolle:\n3.498,60 + 60,00 + 11,40 = 3.570,00 € ✓",
    tags: ["#Buchungssatz", "#Wareneinkauf", "#Skonto", "#Verbindlichkeiten"],
    hint: "Erst Einkaufsbuchung, dann Zahlungsbuchung mit Skontokorrektur"
  },
  {
    id: 10,
    category: "Buchungssätze",
    topic: "Warenverkauf mit Skonto",
    difficulty: "mittel",
    question: "Warenverkauf auf Ziel: 2.000 € netto + 380 € MwSt. = 2.380 € brutto. Buchungssatz beim Verkauf und bei Zahlungseingang mit 3% Skonto.",
    shortAnswer: "Verkauf: Forderungen 2.380 an Umsatzerlöse 2.000 + USt 380. Zahlung: Bank 2.308,60 + Skontoaufwand 60 + USt 11,40 an Forderungen 2.380",
    longAnswer: "Zwei Buchungssätze:\n\n1. Buchungssatz bei WARENAUSGANG:\nForderungen a.L.L.  2.380 €\n  an Umsatzerlöse        2.000 €\n  an Umsatzsteuer          380 €\n\n2. Buchungssatz bei ZAHLUNGSEINGANG (mit 3% Skonto):\nSkonto: 2.000 × 3% = 60 €\nMwSt.-Korrektur: 60 × 19% = 11,40 €\nZahlungseingang: 2.380 − 60 − 11,40 = 2.308,60 €\n\nBank                    2.308,60 €\nSkontoaufwand              60,00 €\nUmsatzsteuer               11,40 €\n  an Forderungen a.L.L.        2.380,00 €\n\nKontrolle:\n2.308,60 + 60,00 + 11,40 = 2.380,00 € ✓",
    tags: ["#Buchungssatz", "#Warenverkauf", "#Skonto", "#Forderungen"],
    hint: "Erst Verkaufsbuchung, dann Eingang mit Skontoaufwand + USt-Korrektur"
  },
  {
    id: 11,
    category: "Buchungssätze",
    topic: "Skonto ohne MwSt.-Korrektur",
    difficulty: "leicht",
    question: "Wann wird bei Skonto KEINE Umsatzsteuer-Korrektur gebucht? Nennen Sie zwei Fälle.",
    shortAnswer: "1. Bei Kleinunternehmer (§19 UStG, keine MwSt.-Pflicht). 2. Bei steuerfreien Umsätzen (z.B. Grundstücksverkauf, Arztleistungen).",
    longAnswer: "Keine MwSt.-Korrektur bei Skonto in folgenden Fällen:\n\n1. Kleinunternehmer (§19 UStG)\n• Jahresumsatz ≤ 22.000 € (bis 2024) / 25.000 € (ab 2025)\n• Keine Umsatzsteuer auf Rechnung → keine Korrektur nötig\n• Buchung: nur Verbindlichkeiten an Bank + Skontoertrag\n\n2. Steuerfreie Umsätze (§4 UStG)\n• Grundstücksverkäufe, Arztleistungen, Versicherungen\n• Keine MwSt. → keine Korrektur\n\n3. Nicht-Unternehmer (Privatpersonen)\n• Keine Vorsteuer → keine Korrektur beim Käufer\n\n4. Reverse-Charge-Verfahren (§13b UStG)\n• Steuerschuldnerschaft geht auf Käufer über\n• Besondere Buchungsregeln gelten\n\nFaustregel: Nur wenn auf der Rechnung MwSt. ausgewiesen ist, muss bei Skonto eine MwSt.-Korrektur gebucht werden.",
    tags: ["#Buchungssatz", "#Skonto", "#MwSt", "#Ausnahmen"],
    hint: "Keine MwSt.-Korrektur bei Kleinunternehmer oder steuerfreien Umsätzen"
  },
  {
    id: 12,
    category: "Buchungssätze",
    topic: "Skonto auf Anzahlung",
    difficulty: "schwer",
    question: "Ein Kunde leistet eine Anzahlung von 2.380 € (brutto). Bei Endzahlung über 4.760 € brutto zieht er 2% Skonto auf den Gesamtbetrag ab. Wie wird die Endzahlung gebucht?",
    shortAnswer: "Gesamtskonto: 4.000 × 2% = 80 €. Endzahlung: 4.760 − 2.380 − 80 − 15,20 = 2.284,80 €. Buchung: Erhaltene Anzahlungen + Bank + Skontoaufwand + USt an Forderungen.",
    longAnswer: "Buchung Endzahlung mit Skonto auf Gesamtbetrag:\n\nGesamtrechnung: 4.760 € brutto (4.000 € netto + 760 € MwSt.)\nAnzahlung: 2.380 € (bereits gebucht)\nRestforderung: 4.760 − 2.380 = 2.380 €\n\nSkonto auf Gesamtnetto: 4.000 × 2% = 80 €\nMwSt.-Korrektur: 80 × 19% = 15,20 €\nZahlungseingang: 2.380 − 80 − 15,20 = 2.284,80 €\n\nBuchungssatz Endzahlung:\nBank                    2.284,80 €\nErhaltene Anzahlungen   2.380,00 €\nSkontoaufwand              80,00 €\nUmsatzsteuer               15,20 €\n  an Forderungen a.L.L.        4.760,00 €\n\nKontrolle: 2.284,80 + 2.380 + 80 + 15,20 = 4.760 € ✓",
    tags: ["#Buchungssatz", "#Skonto", "#Anzahlung", "#Forderungen"],
    hint: "Skonto auf Gesamtbetrag, Anzahlung verrechnen, MwSt. korrigieren"
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BLOCK 3: ZAHLUNGSVERKEHR
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 13,
    category: "Zahlungsverkehr",
    topic: "Zahlungsarten im Überblick",
    difficulty: "leicht",
    question: "Nennen Sie 5 Zahlungsarten im bargeldlosen Zahlungsverkehr und erklären Sie je eine Besonderheit.",
    shortAnswer: "Überweisung (Schuldner aktiv), Lastschrift (Gläubiger aktiv), Scheck (Zahlungsversprechen), Wechsel (Kreditinstrument), Kreditkarte (Kreditinstitut zahlt vor).",
    longAnswer: "Bargeldlose Zahlungsarten:\n\n1. Überweisung (SEPA-Überweisung)\n• Schuldner erteilt Auftrag an seine Bank\n• Sicher, weit verbreitet\n• Buchung: Verbindlichkeiten an Bank\n\n2. Lastschrift (SEPA-Lastschrift)\n• Gläubiger zieht Betrag ein (mit Mandat)\n• Bequem für Dauerleistungen (Miete, Strom)\n• Rückbuchung innerhalb 8 Wochen möglich\n\n3. Scheck\n• Zahlungsanweisung an Bank\n• Verrechnungsscheck: nur Überweisung, kein Bargeld\n• Buchung: Besitz-Wechsel / Forderungen\n\n4. Wechsel\n• Kreditinstrument + Zahlungsmittel\n• Gezogener Wechsel (Tratte) vs. eigener Wechsel (Solawechsel)\n• Diskontierung: Bank kauft Wechsel vor Fälligkeit\n\n5. Kreditkarte\n• Kreditinstitut zahlt vor, Abrechnung monatlich\n• Buchung: Forderungen an Umsatzerlöse (bei Akzeptanz)",
    tags: ["#Zahlungsverkehr", "#Überweisung", "#Lastschrift", "#Scheck"],
    hint: "Überweisung=Schuldner aktiv, Lastschrift=Gläubiger aktiv"
  },
  {
    id: 14,
    category: "Zahlungsverkehr",
    topic: "SEPA-Überweisung buchen",
    difficulty: "leicht",
    question: "Ein Unternehmen überweist 3.570 € an einen Lieferanten zur Begleichung einer Verbindlichkeit. Buchungssatz?",
    shortAnswer: "Verbindlichkeiten a.L.L. 3.570 € an Bank 3.570 €",
    longAnswer: "Buchungssatz SEPA-Überweisung (Schuldner):\n\nVerbindlichkeiten a.L.L.  3.570 €\n  an Bank (Girokonto)          3.570 €\n\nErklärung:\n• Verbindlichkeiten sinken → Soll-Buchung (Aktivminderung)\n• Bank sinkt → Haben-Buchung (Aktivminderung)\n\nKontenrahmen:\n• Verbindlichkeiten a.L.L. = Konto 1600 (SKR03) / 3300 (SKR04)\n• Bank = Konto 1200 (SKR03) / 1800 (SKR04)\n\nBei Zahlung MIT Skonto → Buchungssatz aus Aufgabe 7/8 verwenden!\n\nMerke: Überweisung = Aktivtausch (Bank sinkt, Verbindlichkeit sinkt)\nBeide Seiten der Bilanz werden kleiner → keine Bilanzsummenänderung",
    tags: ["#Buchungssatz", "#Überweisung", "#Bank", "#Verbindlichkeiten"],
    hint: "Verbindlichkeiten an Bank – beide Konten sinken"
  },
  {
    id: 15,
    category: "Zahlungsverkehr",
    topic: "Lastschrift buchen",
    difficulty: "leicht",
    question: "Die Miete von 1.500 € wird per Lastschrift vom Girokonto abgebucht. Buchungssatz?",
    shortAnswer: "Mietaufwand 1.500 € an Bank 1.500 €",
    longAnswer: "Buchungssatz Lastschrift (Miete):\n\nMietaufwand (Raumkosten)  1.500 €\n  an Bank (Girokonto)          1.500 €\n\nErklärung:\n• Mietaufwand steigt → Soll-Buchung (Aufwandskonto)\n• Bank sinkt → Haben-Buchung (Aktivminderung)\n\nBei Lastschrift mit MwSt. (z.B. Leasing 1.190 € brutto):\nLeasingaufwand   1.000 €\nVorsteuer          190 €\n  an Bank              1.190 €\n\nBesonderheit Lastschrift:\n• Gläubiger zieht ein → Buchung erst bei Kontoauszug\n• Rückbuchung möglich (Widerspruch innerhalb 8 Wochen)\n• Buchung bei Rückbuchung: Bank an Verbindlichkeiten",
    tags: ["#Buchungssatz", "#Lastschrift", "#Mietaufwand", "#Bank"],
    hint: "Aufwandskonto an Bank – Aufwand steigt, Bank sinkt"
  },
  {
    id: 16,
    category: "Zahlungsverkehr",
    topic: "Wechsel – Grundlagen",
    difficulty: "mittel",
    question: "Was ist ein Wechsel? Erklären Sie den Unterschied zwischen gezogenem Wechsel (Tratte) und eigenem Wechsel (Solawechsel).",
    shortAnswer: "Gezogener Wechsel: Gläubiger fordert Schuldner auf zu zahlen (3 Parteien). Solawechsel: Schuldner verspricht selbst zu zahlen (2 Parteien).",
    longAnswer: "Wechsel – Kreditinstrument und Zahlungsmittel:\n\nGezogener Wechsel (Tratte / Bill of Exchange):\n• Aussteller (Trassant) = Gläubiger\n• Bezogener (Trassat) = Schuldner\n• Remittent = Zahlungsempfänger (oft = Trassant)\n• Ablauf: Gläubiger zieht Wechsel auf Schuldner\n• Schuldner akzeptiert (Akzept) → wird zum Akzeptanten\n• 3 Beteiligte\n\nEigener Wechsel (Solawechsel / Promissory Note):\n• Aussteller = Schuldner\n• Schuldner verspricht selbst zu zahlen\n• 2 Beteiligte\n• Häufig bei Ratenzahlungen\n\nWechselbestandteile (Pflichtangaben):\n• Wort 'Wechsel' im Text\n• Zahlungsversprechen/-anweisung\n• Betrag in Ziffern und Buchstaben\n• Fälligkeitsdatum\n• Zahlungsort\n• Ausstellungsort und -datum\n• Unterschrift",
    tags: ["#Zahlungsverkehr", "#Wechsel", "#Tratte", "#Solawechsel"],
    hint: "Tratte=3 Parteien (Gläubiger zieht), Solawechsel=2 Parteien (Schuldner verspricht)"
  },
  {
    id: 17,
    category: "Zahlungsverkehr",
    topic: "Wechsel buchen – Besitzwechsel",
    difficulty: "schwer",
    question: "Ein Unternehmen erhält einen Wechsel über 5.000 € von einem Kunden als Zahlung für eine Forderung. Buchungssatz bei Erhalt und bei Einlösung?",
    shortAnswer: "Erhalt: Besitzwechsel 5.000 an Forderungen 5.000. Einlösung: Bank 5.000 an Besitzwechsel 5.000.",
    longAnswer: "Buchungssätze Besitzwechsel:\n\n1. Bei ERHALT des Wechsels:\nBesitzwechsel (Wechselforderungen)  5.000 €\n  an Forderungen a.L.L.                  5.000 €\n\nErklärung:\n• Forderung wird in Wechselforderung umgewandelt\n• Besitzwechsel = Aktivkonto (Umlaufvermögen)\n\n2. Bei EINLÖSUNG (Fälligkeit):\nBank                  5.000 €\n  an Besitzwechsel        5.000 €\n\n3. Bei DISKONTIERUNG (Verkauf an Bank vor Fälligkeit):\nBank                  4.950 €  (Wechselbetrag − Diskont)\nDiskontaufwand           50 €  (Bankgebühr)\n  an Besitzwechsel        5.000 €\n\nBilanzausweis:\n• Besitzwechsel: Umlaufvermögen, Forderungen\n• Wechselverbindlichkeiten: Fremdkapital",
    tags: ["#Buchungssatz", "#Wechsel", "#Besitzwechsel", "#Diskont"],
    hint: "Erhalt: Besitzwechsel an Forderungen. Einlösung: Bank an Besitzwechsel"
  },
  {
    id: 18,
    category: "Zahlungsverkehr",
    topic: "Scheck buchen",
    difficulty: "mittel",
    question: "Ein Unternehmen erhält einen Verrechnungsscheck über 2.380 € von einem Kunden. Buchungssatz bei Erhalt und bei Einreichung bei der Bank?",
    shortAnswer: "Erhalt: Schecks 2.380 an Forderungen 2.380. Einreichung: Bank 2.380 an Schecks 2.380.",
    longAnswer: "Buchungssätze Scheck:\n\n1. Bei ERHALT des Schecks:\nSchecks (Besitzschecks)  2.380 €\n  an Forderungen a.L.L.      2.380 €\n\nErklärung:\n• Forderung wird in Scheckforderung umgewandelt\n• Schecks = Aktivkonto (Zahlungsmitteläquivalent)\n\n2. Bei EINREICHUNG bei der Bank:\nBank                  2.380 €\n  an Schecks              2.380 €\n\nAlternativ (direkt bei Erhalt, wenn sofort eingereicht):\nBank                  2.380 €\n  an Forderungen a.L.L.  2.380 €\n\nBesonderheiten:\n• Verrechnungsscheck: Nur Überweisung, kein Bargarzahlung\n• Barscheck: Barauszahlung möglich\n• Scheckfrist: 8 Tage (Inland), 20 Tage (Europa)\n• Rückgabe bei Deckungslosigkeit: Schecks an Bank",
    tags: ["#Buchungssatz", "#Scheck", "#Zahlungsverkehr"],
    hint: "Erhalt: Schecks an Forderungen. Einreichung: Bank an Schecks"
  },
  {
    id: 19,
    category: "Zahlungsverkehr",
    topic: "Mahnwesen und Zahlungsverzug",
    difficulty: "mittel",
    question: "Ab wann ist ein Schuldner automatisch in Verzug? Was sind die Rechtsfolgen des Zahlungsverzugs?",
    shortAnswer: "Automatisch nach 30 Tagen ab Fälligkeit (§286 BGB). Rechtsfolgen: Verzugszinsen (5% über Basiszinssatz), Schadensersatz, Mahnkosten.",
    longAnswer: "Zahlungsverzug nach BGB:\n\nVerzugseintritt (§286 BGB):\n1. Nach Mahnung: Sofort bei Nichtleistung nach Mahnung\n2. Automatisch (ohne Mahnung):\n   • Nach 30 Tagen ab Fälligkeit UND Rechnungserhalt\n   • Bei kalendermäßig bestimmtem Termin\n   • Bei ernsthafter Erfüllungsverweigerung\n\nRechtsfolgen:\n• Verzugszinsen:\n  - Verbraucher: Basiszinssatz + 5%\n  - Unternehmer: Basiszinssatz + 9% (§288 BGB)\n  - Basiszinssatz 2024: ca. 3,62% → Unternehmer: 12,62%\n\n• Schadensersatz (§280 BGB)\n• Mahnkosten (pauschal 40 € bei Unternehmer, §288 Abs. 5)\n• Kündigung bei Dauerschuldverhältnissen\n\nMahnprozess:\n1. Mahnung (freundliche Erinnerung)\n2. 2. Mahnung (mit Fristsetzung)\n3. 3. Mahnung (mit Androhung rechtlicher Schritte)\n4. Mahnbescheid / Klage",
    tags: ["#Zahlungsverkehr", "#Verzug", "#Mahnung", "#BGB"],
    hint: "Automatisch nach 30 Tagen. Zinsen: Basiszins + 9% (Unternehmer)"
  },
  {
    id: 20,
    category: "Zahlungsverkehr",
    topic: "Forderungsausfall buchen",
    difficulty: "schwer",
    question: "Eine Forderung über 1.190 € brutto (1.000 € netto + 190 € MwSt.) ist uneinbringlich. Buchungssatz für den Forderungsausfall?",
    shortAnswer: "Forderungsverluste 1.000 €, Umsatzsteuer 190 € an Forderungen a.L.L. 1.190 €",
    longAnswer: "Buchungssatz Forderungsausfall:\n\nForderungsverluste (Aufwand)  1.000 €\nUmsatzsteuer (Korrektur)        190 €\n  an Forderungen a.L.L.             1.190 €\n\nErklärung:\n• Forderungsverluste = Aufwandskonto (GuV)\n• Umsatzsteuer wird korrigiert (da keine Zahlung erfolgt)\n• Finanzamt erstattet die abgeführte MwSt. zurück\n\nStufen des Forderungsmanagements:\n1. Einzelwertberichtigung (EWB):\n   Wertberichtigung auf Forderungen  1.190 €\n     an Forderungen a.L.L.               1.190 €\n   (Wenn Ausfall wahrscheinlich, aber noch nicht sicher)\n\n2. Endgültiger Ausfall:\n   Forderungsverluste  1.000 €\n   Umsatzsteuer          190 €\n     an Wertberichtigung    1.190 €\n\nFinanzamtlich: Berichtigungsantrag nach §17 UStG stellen!",
    tags: ["#Buchungssatz", "#Forderungsausfall", "#Wertberichtigung", "#MwSt"],
    hint: "Forderungsverluste + USt-Korrektur an Forderungen"
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BLOCK 4: JAHRESABSCHLUSS – GRUNDLAGEN
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 21,
    category: "Jahresabschluss",
    topic: "Bestandteile Jahresabschluss",
    difficulty: "leicht",
    question: "Welche Bestandteile hat der Jahresabschluss einer GmbH? Was kommt beim Einzelkaufmann hinzu?",
    shortAnswer: "GmbH: Bilanz + GuV + Anhang + Lagebericht. Einzelkaufmann (klein): nur Bilanz + GuV.",
    longAnswer: "Jahresabschluss nach HGB:\n\nEinzelkaufmann (klein, §241a HGB):\n• Nur Einnahmen-Überschuss-Rechnung (EÜR) möglich\n• Keine Buchführungspflicht unter 600.000 € Umsatz / 60.000 € Gewinn\n\nKleine Kapitalgesellschaft (GmbH klein):\n• Bilanz\n• Gewinn- und Verlustrechnung (GuV)\n• Anhang\n\nMittelgroße Kapitalgesellschaft:\n• Bilanz\n• GuV\n• Anhang\n• Lagebericht\n\nGroße Kapitalgesellschaft / AG:\n• Bilanz\n• GuV\n• Anhang\n• Lagebericht\n• Kapitalflussrechnung\n• Eigenkapitalspiegel\n• ggf. Segmentberichterstattung\n\nPublizitätspflicht:\n• Kleine GmbH: nur Bilanz + Anhang im Bundesanzeiger\n• Große AG: vollständiger Jahresabschluss",
    tags: ["#Jahresabschluss", "#Bilanz", "#GuV", "#HGB"],
    hint: "GmbH: Bilanz + GuV + Anhang. Groß: + Lagebericht + Kapitalflussrechnung"
  },
  {
    id: 22,
    category: "Jahresabschluss",
    topic: "Bilanzgliederung",
    difficulty: "mittel",
    question: "Nennen Sie die Hauptgliederung der Bilanz nach HGB (Aktiva und Passiva je 3 Hauptpositionen).",
    shortAnswer: "Aktiva: Anlagevermögen, Umlaufvermögen, Rechnungsabgrenzungsposten. Passiva: Eigenkapital, Rückstellungen, Verbindlichkeiten.",
    longAnswer: "Bilanzgliederung nach §266 HGB:\n\nAKTIVA (Mittelverwendung):\nA. Anlagevermögen\n   I. Immaterielle Vermögensgegenstände\n   II. Sachanlagen (Grundstücke, Maschinen, Fuhrpark)\n   III. Finanzanlagen (Beteiligungen, Wertpapiere)\n\nB. Umlaufvermögen\n   I. Vorräte (Roh-, Hilfs-, Betriebsstoffe, Fertigerzeugnisse)\n   II. Forderungen und sonstige Vermögensgegenstände\n   III. Wertpapiere\n   IV. Kassenbestand, Bankguthaben\n\nC. Rechnungsabgrenzungsposten (ARAP)\n\nPASSIVA (Mittelherkunft):\nA. Eigenkapital\n   (Gezeichnetes Kapital, Rücklagen, Jahresüberschuss)\n\nB. Rückstellungen\n   (Pensionen, Steuern, sonstige)\n\nC. Verbindlichkeiten\n   (Bankdarlehen, Lieferantenverbindlichkeiten)\n\nD. Rechnungsabgrenzungsposten (PRAP)\n\nMerke: Aktiva = Passiva (Bilanzsumme immer gleich!)",
    tags: ["#Jahresabschluss", "#Bilanz", "#Gliederung", "#HGB"],
    hint: "Aktiva: AV + UV + ARAP. Passiva: EK + Rückstellungen + Verbindlichkeiten + PRAP"
  },
  {
    id: 23,
    category: "Jahresabschluss",
    topic: "GuV – Gesamtkostenverfahren",
    difficulty: "mittel",
    question: "Erklären Sie das Gesamtkostenverfahren der GuV. Welche Positionen stehen auf der Aufwands- und Ertragsseite?",
    shortAnswer: "Erträge: Umsatzerlöse + Bestandsveränderungen + aktivierte Eigenleistungen. Aufwendungen: Material, Personal, Abschreibungen, sonstige. Differenz = Jahresergebnis.",
    longAnswer: "GuV nach Gesamtkostenverfahren (§275 Abs. 2 HGB):\n\nERTRAGSSEITE:\n1. Umsatzerlöse\n2. Bestandsveränderungen (Fertig-/Unfertigerzeugnisse)\n3. Andere aktivierte Eigenleistungen\n4. Sonstige betriebliche Erträge\n\nAUFWANDSSEITE:\n5. Materialaufwand\n6. Personalaufwand\n7. Abschreibungen\n8. Sonstige betriebliche Aufwendungen\n= Betriebsergebnis (EBIT)\n\n9. Erträge aus Beteiligungen\n10. Zinserträge\n11. Zinsaufwendungen\n= Finanzergebnis\n\n12. Steuern vom Einkommen\n13. Sonstige Steuern\n= Jahresüberschuss / Jahresfehlbetrag\n\nAlternative: Umsatzkostenverfahren (§275 Abs. 3)\n→ Gliederung nach Funktionsbereichen (Herstellung, Vertrieb, Verwaltung)",
    tags: ["#Jahresabschluss", "#GuV", "#Gesamtkostenverfahren"],
    hint: "Umsatzerlöse − alle Aufwendungen = Jahresergebnis"
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BLOCK 5: ZEITLICHE ERFOLGSABGRENZUNG
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 24,
    category: "Zeitliche Abgrenzung",
    topic: "Grundprinzip Periodenabgrenzung",
    difficulty: "leicht",
    question: "Was versteht man unter dem Prinzip der zeitlichen Abgrenzung (Periodenabgrenzung) in der Buchführung?",
    shortAnswer: "Aufwendungen und Erträge müssen der Periode zugeordnet werden, in der sie wirtschaftlich verursacht wurden – unabhängig vom Zahlungszeitpunkt.",
    longAnswer: "Periodenabgrenzung (§252 HGB):\n\nGrundsatz der Periodenabgrenzung:\n• Aufwendungen und Erträge gehören in die Periode, in der sie wirtschaftlich entstanden sind\n• Nicht: wann Geld fließt!\n\nRealisationsprinzip (§252 Abs. 1 Nr. 4 HGB):\n• Erträge erst buchen, wenn realisiert (Leistung erbracht)\n\nImparitätsprinzip:\n• Verluste sofort, Gewinne erst bei Realisierung\n\nInstrumente der Abgrenzung:\n1. Aktive Rechnungsabgrenzungsposten (ARAP)\n2. Passive Rechnungsabgrenzungsposten (PRAP)\n3. Rückstellungen\n4. Rechnungsabgrenzung für Zinsen\n\nBeispiel:\nVersicherungsprämie 1.200 € für Jan–Dez wird im Oktober gezahlt.\n→ Oktober–Dezember (3 Monate) = 300 € Aufwand im alten Jahr\n→ Januar–September (9 Monate) = 900 € gehört ins neue Jahr → ARAP\n\nMerke: Zahlung ≠ Aufwand/Ertrag!",
    tags: ["#Abgrenzung", "#Periodenabgrenzung", "#ARAP", "#PRAP"],
    hint: "Wirtschaftliche Zugehörigkeit entscheidet, nicht der Zahlungszeitpunkt"
  },
  {
    id: 25,
    category: "Zeitliche Abgrenzung",
    topic: "ARAP – Aktiver Rechnungsabgrenzungsposten",
    difficulty: "mittel",
    question: "Was ist ein aktiver Rechnungsabgrenzungsposten (ARAP)? Nennen Sie die Buchungssätze bei Entstehung und Auflösung.",
    shortAnswer: "ARAP: Ausgabe im alten Jahr für Leistung im neuen Jahr. Entstehung: ARAP an Aufwand. Auflösung: Aufwand an ARAP.",
    longAnswer: "Aktiver Rechnungsabgrenzungsposten (ARAP):\n\nDefinition:\n• Ausgabe vor dem Bilanzstichtag\n• Für Aufwand nach dem Bilanzstichtag\n• Aktivposten in der Bilanz\n\nMerksatz: 'Ich zahle jetzt, die Leistung kommt später'\n\nBeispiel:\nVersicherungsprämie 1.200 € für 01.10.–30.09. nächsten Jahres\n→ Gezahlt am 01.10. altes Jahr\n→ 3 Monate altes Jahr: 300 €\n→ 9 Monate neues Jahr: 900 € → ARAP\n\nBuchungssatz bei Zahlung (01.10.):\nVersicherungsaufwand  1.200 €\n  an Bank                  1.200 €\n\nBuchungssatz bei Abschluss (31.12.) – ARAP bilden:\nARAP                    900 €\n  an Versicherungsaufwand  900 €\n\nBuchungssatz Anfang neues Jahr – ARAP auflösen:\nVersicherungsaufwand  900 €\n  an ARAP                  900 €\n\nBilanzausweis: ARAP auf der Aktivseite (Umlaufvermögen)",
    tags: ["#Abgrenzung", "#ARAP", "#Buchungssatz", "#Jahresabschluss"],
    hint: "ARAP: Zahlung jetzt, Leistung später. Entstehung: ARAP an Aufwand"
  },
  {
    id: 26,
    category: "Zeitliche Abgrenzung",
    topic: "PRAP – Passiver Rechnungsabgrenzungsposten",
    difficulty: "mittel",
    question: "Was ist ein passiver Rechnungsabgrenzungsposten (PRAP)? Nennen Sie die Buchungssätze bei Entstehung und Auflösung.",
    shortAnswer: "PRAP: Einnahme im alten Jahr für Leistung im neuen Jahr. Entstehung: Ertrag an PRAP. Auflösung: PRAP an Ertrag.",
    longAnswer: "Passiver Rechnungsabgrenzungsposten (PRAP):\n\nDefinition:\n• Einnahme vor dem Bilanzstichtag\n• Für Ertrag nach dem Bilanzstichtag\n• Passivposten in der Bilanz\n\nMerksatz: 'Ich erhalte Geld jetzt, die Leistung erbringe ich später'\n\nBeispiel:\nVermietung einer Lagerhalle: Miete 6.000 € für Jan–Jun nächsten Jahres\n→ Erhalten am 01.12. altes Jahr\n→ Dezember altes Jahr: 0 € Ertrag (Leistung noch nicht erbracht)\n→ Jan–Jun neues Jahr: 6.000 € → PRAP\n\nBuchungssatz bei Eingang (01.12.):\nBank                  6.000 €\n  an Mieterlöse            6.000 €\n\nBuchungssatz bei Abschluss (31.12.) – PRAP bilden:\nMieterlöse            6.000 €\n  an PRAP                  6.000 €\n\nBuchungssatz Anfang neues Jahr – PRAP auflösen:\nPRAP                  6.000 €\n  an Mieterlöse            6.000 €\n\nBilanzausweis: PRAP auf der Passivseite",
    tags: ["#Abgrenzung", "#PRAP", "#Buchungssatz", "#Jahresabschluss"],
    hint: "PRAP: Einnahme jetzt, Leistung später. Entstehung: Ertrag an PRAP"
  },
  {
    id: 27,
    category: "Zeitliche Abgrenzung",
    topic: "ARAP Praxisbeispiel",
    difficulty: "mittel",
    question: "Ein Unternehmen zahlt am 01.11. eine Kfz-Versicherung von 2.400 € für den Zeitraum 01.11. bis 31.10. des Folgejahres. Wie hoch ist der ARAP zum 31.12.?",
    shortAnswer: "ARAP = 2.000 €. Altes Jahr: 2 Monate × 200 €/Monat = 400 €. Neues Jahr: 10 Monate × 200 € = 2.000 € → ARAP",
    longAnswer: "ARAP-Berechnung:\n\nGegeben:\n• Zahlung: 2.400 € am 01.11.\n• Versicherungszeitraum: 01.11. – 31.10. Folgejahr = 12 Monate\n• Monatlicher Betrag: 2.400 / 12 = 200 €/Monat\n\nAufteilung:\n• Altes Jahr (Nov + Dez = 2 Monate): 2 × 200 = 400 € → Aufwand\n• Neues Jahr (Jan–Okt = 10 Monate): 10 × 200 = 2.000 € → ARAP\n\nBuchungssätze:\n1. Bei Zahlung (01.11.):\n   Kfz-Versicherung  2.400 an Bank  2.400\n\n2. Bei Abschluss (31.12.):\n   ARAP  2.000 an Kfz-Versicherung  2.000\n\n3. Anfang Folgejahr (01.01.):\n   Kfz-Versicherung  2.000 an ARAP  2.000\n\nKontrolle: Aufwand im alten Jahr = 400 € ✓ (nur Nov + Dez)",
    tags: ["#Abgrenzung", "#ARAP", "#Versicherung", "#Berechnung"],
    hint: "Monatsbetrag × Monate im neuen Jahr = ARAP"
  },
  {
    id: 28,
    category: "Zeitliche Abgrenzung",
    topic: "PRAP Praxisbeispiel",
    difficulty: "mittel",
    question: "Ein Unternehmen erhält am 01.12. eine Mietzahlung von 3.000 € für den Zeitraum 01.12. bis 28.02. des Folgejahres. Wie hoch ist der PRAP zum 31.12.?",
    shortAnswer: "PRAP = 2.000 €. Altes Jahr: 1 Monat × 1.000 €/Monat = 1.000 €. Neues Jahr: 2 Monate × 1.000 € = 2.000 € → PRAP",
    longAnswer: "PRAP-Berechnung:\n\nGegeben:\n• Einnahme: 3.000 € am 01.12.\n• Mietzeitraum: 01.12. – 28.02. = 3 Monate\n• Monatliche Miete: 3.000 / 3 = 1.000 €/Monat\n\nAufteilung:\n• Altes Jahr (Dez = 1 Monat): 1 × 1.000 = 1.000 € → Ertrag\n• Neues Jahr (Jan + Feb = 2 Monate): 2 × 1.000 = 2.000 € → PRAP\n\nBuchungssätze:\n1. Bei Eingang (01.12.):\n   Bank  3.000 an Mieterlöse  3.000\n\n2. Bei Abschluss (31.12.):\n   Mieterlöse  2.000 an PRAP  2.000\n\n3. Anfang Folgejahr (01.01.):\n   PRAP  2.000 an Mieterlöse  2.000\n\nKontrolle: Ertrag im alten Jahr = 1.000 € ✓ (nur Dezember)",
    tags: ["#Abgrenzung", "#PRAP", "#Miete", "#Berechnung"],
    hint: "Monatsbetrag × Monate im neuen Jahr = PRAP"
  },
  {
    id: 29,
    category: "Zeitliche Abgrenzung",
    topic: "Abgrenzung Zinsen",
    difficulty: "schwer",
    question: "Ein Unternehmen hat am 01.07. ein Darlehen von 100.000 € zu 6% p.a. aufgenommen. Zinsen werden halbjährlich am 31.12. und 30.06. gezahlt. Welche Abgrenzung ist zum 31.12. nötig?",
    shortAnswer: "Keine Abgrenzung nötig – Zinsen werden am 31.12. gezahlt. Buchung: Zinsaufwand 3.000 an Bank 3.000.",
    longAnswer: "Zinsabgrenzung:\n\nGegeben:\n• Darlehen: 100.000 €\n• Zinssatz: 6% p.a.\n• Zinszahlung: 31.12. und 30.06.\n\nHalbjahresszinsen: 100.000 × 6% / 2 = 3.000 €\n\nDa Zinszahlung AM 31.12. erfolgt → keine Abgrenzung nötig!\n\nBuchungssatz 31.12.:\nZinsaufwand  3.000 €\n  an Bank        3.000 €\n\nAbgrenzung wäre nötig, wenn Zinszahlung NICHT am Bilanzstichtag:\nBeispiel: Darlehen 01.10., Zinszahlung 31.03.\n→ Zum 31.12.: 3 Monate aufgelaufen (Okt–Dez)\n→ Zinsen: 100.000 × 6% × 3/12 = 1.500 €\n→ Buchung: Zinsaufwand 1.500 an Sonstige Verbindlichkeiten 1.500\n(Antizipative Abgrenzung = Rechnungsabgrenzung für noch nicht fällige Zinsen)\n\nMerke: Aufgelaufene, noch nicht gezahlte Zinsen → Sonstige Verbindlichkeiten",
    tags: ["#Abgrenzung", "#Zinsen", "#Darlehen", "#Jahresabschluss"],
    hint: "Aufgelaufene Zinsen = Sonstige Verbindlichkeiten (antizipativ)"
  },
  {
    id: 30,
    category: "Zeitliche Abgrenzung",
    topic: "Antizipative vs. transitorische Abgrenzung",
    difficulty: "schwer",
    question: "Was ist der Unterschied zwischen antizipativer und transitorischer Abgrenzung? Nennen Sie je ein Beispiel.",
    shortAnswer: "Transitorisch: Zahlung jetzt, Leistung später (ARAP/PRAP). Antizipativ: Leistung jetzt, Zahlung später (Sonstige Forderungen/Verbindlichkeiten).",
    longAnswer: "Abgrenzungsarten:\n\nTRANSITORISCHE Abgrenzung (Rechnungsabgrenzungsposten):\n• Zahlung erfolgt VOR der Leistungsperiode\n• Instrumente: ARAP und PRAP\n\nARAP (aktiv-transitorisch):\n• Ausgabe jetzt, Aufwand später\n• Beispiel: Versicherungsprämie im Oktober für nächstes Jahr\n\nPRAP (passiv-transitorisch):\n• Einnahme jetzt, Ertrag später\n• Beispiel: Mietvorauszahlung erhalten für nächstes Jahr\n\nANTIZIPATIVE Abgrenzung (Rechnungsabgrenzung):\n• Leistung erfolgt VOR der Zahlung\n• Instrumente: Sonstige Forderungen / Sonstige Verbindlichkeiten\n\nAktiv-antizipativ (Sonstige Forderungen):\n• Ertrag jetzt, Einnahme später\n• Beispiel: Zinsen für Dez. werden erst im Jan. gutgeschrieben\n• Buchung: Sonstige Forderungen an Zinserträge\n\nPassiv-antizipativ (Sonstige Verbindlichkeiten):\n• Aufwand jetzt, Ausgabe später\n• Beispiel: Urlaubsgeld-Rückstellung, aufgelaufene Zinsen\n• Buchung: Aufwand an Sonstige Verbindlichkeiten\n\nMerkhilfe:\nT = Transitorisch = Timing (Geld vor Leistung)\nA = Antizipativ = Antizipieren (Leistung vor Geld)",
    tags: ["#Abgrenzung", "#Antizipativ", "#Transitorisch", "#ARAP", "#PRAP"],
    hint: "Transitorisch=Geld vor Leistung (ARAP/PRAP). Antizipativ=Leistung vor Geld"
  },
  {
    id: 31,
    category: "Zeitliche Abgrenzung",
    topic: "Rückstellungen",
    difficulty: "mittel",
    question: "Was sind Rückstellungen? Nennen Sie 4 typische Rückstellungsarten und den Buchungssatz bei Bildung.",
    shortAnswer: "Rückstellungen = Verbindlichkeiten ungewisser Höhe/Zeitpunkt. Bildung: Aufwand an Rückstellungen. Arten: Pensionen, Steuern, Garantien, Urlaubsgeld.",
    longAnswer: "Rückstellungen (§249 HGB):\n\nDefinition:\n• Verbindlichkeiten, deren Eintreten wahrscheinlich, aber Höhe/Zeitpunkt ungewiss\n• Passivierungspflicht (müssen gebildet werden!)\n\nTypische Rückstellungsarten:\n1. Pensionsrückstellungen\n   • Für zugesagte Betriebsrenten\n   • Langfristig, versicherungsmathematisch berechnet\n\n2. Steuerrückstellungen\n   • Für noch nicht veranlagte Steuern\n   • Körperschaftsteuer, Gewerbesteuer\n\n3. Garantie-/Gewährleistungsrückstellungen\n   • Für erwartete Reparaturen/Nachbesserungen\n   • Erfahrungswerte aus Vergangenheit\n\n4. Urlaubsrückstellungen\n   • Für nicht genommenen Urlaub\n   • Berechnung: Tage × Tageslohn\n\nBuchungssatz bei BILDUNG:\nAufwand (z.B. Garantieaufwand)  5.000 €\n  an Rückstellungen                  5.000 €\n\nBuchungssatz bei AUFLÖSUNG (Verbrauch):\nRückstellungen  5.000 €\n  an Bank/Verbindlichkeiten  5.000 €\n\nBuchungssatz bei AUFLÖSUNG (nicht benötigt):\nRückstellungen  5.000 €\n  an Sonstige Erträge  5.000 €",
    tags: ["#Jahresabschluss", "#Rückstellungen", "#Buchungssatz"],
    hint: "Rückstellungen: Aufwand an Rückstellungen (Bildung)"
  },
  {
    id: 32,
    category: "Zeitliche Abgrenzung",
    topic: "Abschreibungen",
    difficulty: "mittel",
    question: "Ein Unternehmen kauft eine Maschine für 60.000 € (Nutzungsdauer 5 Jahre). Wie lautet der Buchungssatz für die jährliche lineare Abschreibung?",
    shortAnswer: "Abschreibungen 12.000 € an Maschinen 12.000 €. Jahres-AfA = 60.000 / 5 = 12.000 €",
    longAnswer: "Lineare Abschreibung:\n\nGegeben:\n• Anschaffungskosten: 60.000 €\n• Nutzungsdauer: 5 Jahre\n• Restbuchwert: 0 € (kein Schrottwert)\n\nJährliche AfA:\n60.000 € / 5 Jahre = 12.000 €/Jahr\n\nBuchungssatz jährlich:\nAbschreibungen auf Sachanlagen  12.000 €\n  an Maschinen                      12.000 €\n\nEntwicklung Buchwert:\n• Ende Jahr 1: 60.000 − 12.000 = 48.000 €\n• Ende Jahr 2: 48.000 − 12.000 = 36.000 €\n• Ende Jahr 3: 36.000 − 12.000 = 24.000 €\n• Ende Jahr 4: 24.000 − 12.000 = 12.000 €\n• Ende Jahr 5: 12.000 − 12.000 = 0 €\n\nAlternative: Degressive AfA (steuerlich bis 2007/ab 2020 wieder)\n• Fester Prozentsatz auf Restbuchwert\n• Höhere Abschreibung in frühen Jahren\n\nAfA-Tabellen: Vom BMF herausgegeben, bindend für Steuerzwecke",
    tags: ["#Jahresabschluss", "#Abschreibung", "#AfA", "#Buchungssatz"],
    hint: "AfA = Anschaffungskosten / Nutzungsdauer. Buchung: Abschreibungen an Anlage"
  },
  {
    id: 33,
    category: "Zeitliche Abgrenzung",
    topic: "Inventur und Inventar",
    difficulty: "leicht",
    question: "Was ist der Unterschied zwischen Inventur, Inventar und Bilanz? Welche Inventurarten gibt es?",
    shortAnswer: "Inventur=Bestandsaufnahme (Tätigkeit), Inventar=Verzeichnis (Dokument), Bilanz=verdichtete Darstellung (Abschluss). Arten: Stichtagsinventur, vor-/nachverlegte Inventur, permanente Inventur.",
    longAnswer: "Inventur – Inventar – Bilanz:\n\nInventur (Tätigkeit):\n• Körperliche Bestandsaufnahme aller Vermögensgegenstände und Schulden\n• Pflicht nach §240 HGB zum Geschäftsjahresende\n• Ergebnis: Inventar\n\nInventar (Dokument):\n• Ausführliches Verzeichnis aller Vermögensgegenstände und Schulden\n• Mit Mengen, Einzelwerten und Gesamtwerten\n• Grundlage für die Bilanz\n\nBilanz (Abschluss):\n• Verdichtete, gegenüberstellende Darstellung\n• Aktiva = Passiva\n• Keine Einzelpositionen, nur Summen\n\nInventurarten:\n1. Stichtagsinventur: Genau zum Bilanzstichtag\n2. Vorverlegte Inventur: Bis 3 Monate vor Stichtag\n3. Nachverlegte Inventur: Bis 2 Monate nach Stichtag\n4. Permanente Inventur: Laufende Bestandsführung\n5. Stichprobeninventur: Statistisch abgesicherte Stichproben",
    tags: ["#Jahresabschluss", "#Inventur", "#Inventar", "#Bilanz"],
    hint: "Inventur=Tätigkeit, Inventar=Dokument, Bilanz=verdichtete Darstellung"
  },
  {
    id: 34,
    category: "Zeitliche Abgrenzung",
    topic: "Bewertungsgrundsätze",
    difficulty: "mittel",
    question: "Nennen Sie 4 Grundsätze ordnungsmäßiger Buchführung (GoB) und erklären Sie das Niederstwertprinzip.",
    shortAnswer: "GoB: Vollständigkeit, Richtigkeit, Klarheit, Vorsicht. Niederstwertprinzip: Vermögen wird zum niedrigeren Wert (Anschaffungskosten oder Marktwert) bewertet.",
    longAnswer: "Grundsätze ordnungsmäßiger Buchführung (GoB):\n\n1. Vollständigkeitsprinzip (§239 HGB)\n   • Alle Geschäftsvorfälle müssen erfasst werden\n\n2. Richtigkeitsprinzip\n   • Buchungen müssen sachlich korrekt sein\n\n3. Klarheitsprinzip (§243 HGB)\n   • Übersichtliche, verständliche Darstellung\n\n4. Vorsichtsprinzip (§252 HGB)\n   • Lieber zu niedrig als zu hoch bewerten\n   • Imparitätsprinzip: Verluste sofort, Gewinne erst bei Realisierung\n\n5. Niederstwertprinzip:\n   Umlaufvermögen:\n   • Strenges Niederstwertprinzip\n   • Bewertung zum niedrigeren Wert aus: Anschaffungskosten ODER Marktwert\n   • Pflicht zur Abwertung!\n\n   Anlagevermögen:\n   • Gemildertes Niederstwertprinzip\n   • Abwertung nur bei dauerhafter Wertminderung\n\nBeispiel Niederstwertprinzip:\n• Ware eingekauft für 100 €\n• Marktwert am Bilanzstichtag: 80 €\n• Bilanzansatz: 80 € (Abwertung um 20 €)\n• Buchung: Abschreibungen auf UV 20 an Waren 20",
    tags: ["#Jahresabschluss", "#GoB", "#Bewertung", "#Niederstwertprinzip"],
    hint: "Niederstwertprinzip: min(Anschaffungskosten, Marktwert) = Bilanzwert"
  },
  {
    id: 35,
    category: "Zeitliche Abgrenzung",
    topic: "Abgrenzung Skonto im Jahresabschluss",
    difficulty: "schwer",
    question: "Zum Jahresabschluss (31.12.) sind noch Forderungen offen, für die Skonto vereinbart wurde. Muss eine Abgrenzung vorgenommen werden?",
    shortAnswer: "Ja, wenn Skontofrist noch läuft: Forderungen sind mit dem Nettobetrag (nach Skonto) zu bewerten oder eine Wertberichtigung zu bilden.",
    longAnswer: "Skonto im Jahresabschluss:\n\nProblem:\n• Forderung 5.950 € brutto steht noch offen\n• Skontofrist (10 Tage) läuft noch\n• Wahrscheinlich wird Kunde Skonto nutzen\n\nBewertungspflicht nach Niederstwertprinzip:\n• Forderung ist mit dem voraussichtlichen Eingang zu bewerten\n• Wenn Skonto wahrscheinlich: Forderung = 5.831 € (nach Skonto)\n\nMöglichkeit 1: Direkte Abwertung\nSkontoaufwand  100 €\nUmsatzsteuer    19 €\n  an Forderungen  119 €\n\nMöglichkeit 2: Pauschalwertberichtigung\n• Erfahrungswert: X% der Forderungen werden mit Skonto bezahlt\n• Pauschalwertberichtigung auf Forderungsbestand\n\nPraxishinweis:\n• Kleine Unternehmen: oft keine explizite Abgrenzung\n• Große Unternehmen: Pauschalwertberichtigung für Skonti üblich\n• Steuerlich: Skonto erst bei tatsächlicher Inanspruchnahme\n\nMerke: Vorsichtsprinzip → lieber Forderung zu niedrig ansetzen!",
    tags: ["#Jahresabschluss", "#Skonto", "#Abgrenzung", "#Forderungen"],
    hint: "Niederstwertprinzip: Forderung mit voraussichtlichem Eingang bewerten"
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BLOCK 6: GEMISCHTE PRÜFUNGSAUFGABEN
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 36,
    category: "Prüfungsaufgaben",
    topic: "Zahlungsbedingungen auswerten",
    difficulty: "mittel",
    question: "Rechnung: 8.500 € netto + 19% MwSt. Zahlungsbedingung: '14 Tage 3% Skonto, 60 Tage netto'. Berechnen Sie: a) Zahlbetrag mit Skonto, b) Skontobetrag, c) effektiven Jahreszins.",
    shortAnswer: "a) 9.820,85 €, b) 255 € + 48,45 € MwSt., c) ca. 37,8% p.a.",
    longAnswer: "Vollständige Lösung:\n\nGegeben:\n• Netto: 8.500 €\n• MwSt. 19%: 1.615 €\n• Brutto: 10.115 €\n• Skontosatz: 3%\n• Skontofrist: 14 Tage\n• Nettofrist: 60 Tage\n\na) Zahlbetrag mit Skonto:\n• Skonto auf Netto: 8.500 × 3% = 255 €\n• MwSt.-Korrektur: 255 × 19% = 48,45 €\n• Zahlbetrag: 10.115 − 255 − 48,45 = 9.811,55 €\n\nb) Gesamter Skontoabzug:\n• 255 € (Netto) + 48,45 € (MwSt.) = 303,45 €\n\nc) Effektiver Jahreszins:\n• i = (3 / 97) × (360 / (60 − 14))\n• i = 0,03093 × 7,826\n• i = 24,2% p.a.\n\nInterpretation: Wer nicht innerhalb von 14 Tagen zahlt, zahlt faktisch 24,2% Jahreszinsen für 46 Tage Zahlungsaufschub.",
    tags: ["#Skonto", "#Berechnung", "#Zahlungsverkehr", "#Prüfung"],
    hint: "Zahlbetrag = Brutto − Skonto(netto) − MwSt.-Korrektur"
  },
  {
    id: 37,
    category: "Prüfungsaufgaben",
    topic: "Vollständige Buchungskette",
    difficulty: "schwer",
    question: "Buchen Sie alle Geschäftsvorfälle: 1) Wareneinkauf 4.000 € + MwSt. auf Ziel. 2) Rücksendung 500 € + MwSt. 3) Zahlung mit 2% Skonto.",
    shortAnswer: "1) WE 4.000 + VSt 760 an Verb. 4.760. 2) Verb. 595 an WE 500 + VSt 95. 3) Verb. 4.165 an Bank 4.079,70 + Skontoertrag 70 + VSt 15,30",
    longAnswer: "Vollständige Buchungskette:\n\n1. WARENEINKAUF auf Ziel:\n   Netto: 4.000 €, MwSt. 19%: 760 €, Brutto: 4.760 €\n\n   Wareneingang (Einkauf)  4.000 €\n   Vorsteuer                 760 €\n     an Verbindlichkeiten a.L.L.  4.760 €\n\n2. RÜCKSENDUNG (500 € netto + 95 € MwSt. = 595 € brutto):\n\n   Verbindlichkeiten a.L.L.  595 €\n     an Wareneingang (Einkauf)  500 €\n     an Vorsteuer                 95 €\n\n3. ZAHLUNG mit 2% Skonto:\n   Restverbindlichkeit: 4.760 − 595 = 4.165 €\n   Restnetto: 4.000 − 500 = 3.500 €\n   Skonto: 3.500 × 2% = 70 €\n   MwSt.-Korrektur: 70 × 19% = 13,30 €\n   Zahlbetrag: 4.165 − 70 − 13,30 = 4.081,70 €\n\n   Verbindlichkeiten a.L.L.  4.165,00 €\n     an Bank                    4.081,70 €\n     an Skontoertrag               70,00 €\n     an Vorsteuer                  13,30 €\n\n   Kontrolle: 4.081,70 + 70 + 13,30 = 4.165 € ✓",
    tags: ["#Buchungssatz", "#Wareneinkauf", "#Rücksendung", "#Skonto", "#Prüfung"],
    hint: "Erst Einkauf, dann Rücksendung (Storno), dann Zahlung mit Skonto auf Restnetto"
  },
  {
    id: 38,
    category: "Prüfungsaufgaben",
    topic: "ARAP und PRAP gleichzeitig",
    difficulty: "schwer",
    question: "Zum 31.12. liegen vor: a) Versicherungsprämie 1.800 € für Jan–Jun nächstes Jahr bereits gezahlt. b) Mieteinnahme 2.400 € für Feb–Apr nächstes Jahr bereits erhalten. Buchungssätze?",
    shortAnswer: "a) ARAP 1.800 an Versicherungsaufwand 1.800. b) Mieterlöse 2.400 an PRAP 2.400.",
    longAnswer: "Abgrenzungsbuchungen zum 31.12.:\n\na) VERSICHERUNGSPRÄMIE (ARAP):\n• Gezahlt: 1.800 € für Jan–Jun nächstes Jahr\n• Zahlung war im alten Jahr (z.B. Dez.)\n• Leistung (Versicherungsschutz) im neuen Jahr\n→ AKTIVER Rechnungsabgrenzungsposten\n\nBuchungssatz 31.12.:\nARAP  1.800 €\n  an Versicherungsaufwand  1.800 €\n\nAuflösung 01.01.:\nVersicherungsaufwand  1.800 €\n  an ARAP                  1.800 €\n\nb) MIETEINNAHME (PRAP):\n• Erhalten: 2.400 € für Feb–Apr nächstes Jahr\n• Einnahme im alten Jahr\n• Leistung (Überlassung) im neuen Jahr\n→ PASSIVER Rechnungsabgrenzungsposten\n\nBuchungssatz 31.12.:\nMieterlöse  2.400 €\n  an PRAP        2.400 €\n\nAuflösung 01.01.:\nPRAP  2.400 €\n  an Mieterlöse  2.400 €\n\nMerkhilfe:\nARAP = Aktiv = Ausgabe jetzt, Aufwand später\nPRAP = Passiv = Einnahme jetzt, Ertrag später",
    tags: ["#Abgrenzung", "#ARAP", "#PRAP", "#Jahresabschluss", "#Prüfung"],
    hint: "ARAP: Ausgabe jetzt → ARAP an Aufwand. PRAP: Einnahme jetzt → Ertrag an PRAP"
  },
  {
    id: 39,
    category: "Prüfungsaufgaben",
    topic: "Skonto-Entscheidung",
    difficulty: "mittel",
    question: "Zahlungsbedingung: '10 Tage 2% Skonto, 30 Tage netto'. Kontokorrentkredit kostet 8% p.a. Soll das Unternehmen Skonto nutzen?",
    shortAnswer: "Ja! Effektiver Jahreszins Skonto-Verzicht = 36,7% >> 8% Kontokorrentkredit. Skonto immer günstiger.",
    longAnswer: "Skonto-Entscheidung:\n\nEffektiver Jahreszins bei Skonto-Verzicht:\ni = (2 / 98) × (360 / (30 − 10))\ni = 0,02041 × 18 = 36,73% p.a.\n\nKosten Kontokorrentkredit: 8% p.a.\n\nVergleich:\n• Skonto-Verzicht: 36,73% p.a. (faktische Kreditkosten)\n• Kontokorrentkredit: 8% p.a.\n\nEntscheidung: SKONTO NUTZEN!\n\nRechnung:\n• Rechnungsbetrag: z.B. 10.000 €\n• Skontobetrag: 200 €\n• Kredit für 20 Tage: 10.000 × 8% × 20/360 = 44,44 €\n\n→ Kredit kostet 44,44 €, Skonto spart 200 €\n→ Nettovorteil: 200 − 44,44 = 155,56 €\n\nFaustregel:\nSkonto IMMER nutzen, wenn:\nEffektiver Jahreszins Skonto > Kreditzinssatz\n(Fast immer der Fall!)",
    tags: ["#Skonto", "#Entscheidung", "#Jahreszins", "#Kredit"],
    hint: "Vergleiche: Effektiver Jahreszins Skonto vs. Kreditzinssatz"
  },
  {
    id: 40,
    category: "Prüfungsaufgaben",
    topic: "Jahresabschluss-Checkliste",
    difficulty: "leicht",
    question: "Welche 6 Abschlussarbeiten müssen zum Jahresende in der Buchführung durchgeführt werden?",
    shortAnswer: "1.Inventur, 2.Abschreibungen, 3.Rückstellungen, 4.Rechnungsabgrenzung (ARAP/PRAP), 5.Bewertung Vorräte, 6.Abschluss der Konten (GuV + Bilanz).",
    longAnswer: "Jahresabschluss-Checkliste:\n\n1. INVENTUR\n   • Körperliche Bestandsaufnahme\n   • Alle Vermögensgegenstände und Schulden erfassen\n\n2. ABSCHREIBUNGEN\n   • Planmäßige AfA auf Anlagevermögen\n   • Außerplanmäßige AfA bei Wertminderung\n\n3. RÜCKSTELLUNGEN\n   • Pensionen, Steuern, Garantien, Urlaub\n   • Bildung oder Auflösung\n\n4. RECHNUNGSABGRENZUNG\n   • ARAP bilden (Ausgabe jetzt, Aufwand später)\n   • PRAP bilden (Einnahme jetzt, Ertrag später)\n   • Sonstige Forderungen/Verbindlichkeiten (antizipativ)\n\n5. BEWERTUNG VORRÄTE\n   • Niederstwertprinzip anwenden\n   • Abwertung bei Marktpreisrückgang\n\n6. KONTENABSCHLUSS\n   • Aufwands-/Ertragskonten → GuV\n   • GuV → Eigenkapital\n   • Alle Konten → Schlussbilanz\n\nReihenfolge: Inventur → Abschlussarbeiten → Buchungen → GuV → Bilanz",
    tags: ["#Jahresabschluss", "#Checkliste", "#Abschlussarbeiten"],
    hint: "Inventur → AfA → Rückstellungen → ARAP/PRAP → Bewertung → Kontenabschluss"
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BLOCK 7: WEITERE SKONTO-PRAXISFRAGEN
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 41,
    category: "Skonto",
    topic: "Skonto auf Teilzahlung",
    difficulty: "schwer",
    question: "Rechnung 10.000 € netto. Kunde zahlt 5.000 € sofort mit 2% Skonto, Rest nach 60 Tagen netto. Buchungssatz für die Teilzahlung?",
    shortAnswer: "Forderungen 5.950 an Bank 4.802 + Skontoaufwand 100 + USt 19 + Forderungen verbleibend 5.950 (wird nicht gebucht – nur Teilzahlung).",
    longAnswer: "Buchungssatz Teilzahlung mit Skonto:\n\nGesamtrechnung: 10.000 € netto + 1.900 € MwSt. = 11.900 € brutto\n\nTeilzahlung: 5.000 € netto mit 2% Skonto\n• Skonto: 5.000 × 2% = 100 €\n• MwSt.-Korrektur: 100 × 19% = 19 €\n• Zahlungseingang: 5.000 × 1,19 − 100 − 19 = 5.950 − 119 = 5.831 €\n\nBuchungssatz Teilzahlung:\nBank                    5.831 €\nSkontoaufwand             100 €\nUmsatzsteuer               19 €\n  an Forderungen a.L.L.      5.950 €\n\nVerbleibende Forderung: 11.900 − 5.950 = 5.950 €\n(Keine weitere Buchung nötig – Forderungskonto zeigt noch 5.950 €)\n\nBei Restzahlung nach 60 Tagen (kein Skonto):\nBank  5.950 €\n  an Forderungen a.L.L.  5.950 €",
    tags: ["#Buchungssatz", "#Skonto", "#Teilzahlung", "#Forderungen"],
    hint: "Skonto nur auf den Teil, der innerhalb der Skontofrist gezahlt wird"
  },
  {
    id: 42,
    category: "Skonto",
    topic: "Skonto in der Kalkulation",
    difficulty: "mittel",
    question: "Wie wird Skonto in der Handelskalkulation berücksichtigt? Zeigen Sie die Kalkulationsformel.",
    shortAnswer: "Listeneinkaufspreis − Rabatt = Zieleinkaufspreis − Skonto = Bareinkaufspreis + Bezugskosten = Bezugspreis + Gemeinkosten = Selbstkostenpreis + Gewinn = Barverkaufspreis + Skonto + Rabatt = Listenverkaufspreis",
    longAnswer: "Handelskalkulation (vollständig):\n\nLISTENEINKAUFSPREIS (LEP)\n− Lieferantenrabatt (z.B. 10%)\n= ZIELEINKAUFSPREIS (ZEP)\n− Lieferantenskonto (z.B. 2%)\n= BAREINKAUFSPREIS (BEP)\n+ Bezugskosten (Fracht, Verpackung)\n= BEZUGSPREIS (= Einstandspreis)\n\n+ Handlungskosten (Gemeinkosten in %)\n= SELBSTKOSTENPREIS (SKP)\n\n+ Gewinn (in %)\n= BARVERKAUFSPREIS (BVP)\n\n+ Kundenskonto (z.B. 2%) [÷ (1 − 0,02)]\n= ZIELVERKAUFSPREIS (ZVP)\n\n+ Kundenrabatt (z.B. 5%) [÷ (1 − 0,05)]\n= LISTENVERKAUFSPREIS (LVP)\n\nWichtig: Skonto und Rabatt werden beim Verkauf AUFGESCHLAGEN (nicht abgezogen!), weil der Kunde sie später abziehen wird.\n\nFormel: Wenn Skonto 2% → Faktor = 1 / (1 − 0,02) = 1 / 0,98 = 1,0204",
    tags: ["#Skonto", "#Kalkulation", "#Handelskalkulation"],
    hint: "Beim Verkauf: Skonto wird aufgeschlagen (÷ (1-Skontosatz))"
  },
  {
    id: 43,
    category: "Buchungssätze",
    topic: "Kontenrahmen SKR03 vs SKR04",
    difficulty: "leicht",
    question: "Was ist der Unterschied zwischen SKR03 und SKR04? Welcher Kontenrahmen wird für welche Unternehmen empfohlen?",
    shortAnswer: "SKR03 = Abschlussgliederungsprinzip (nach Bilanzgliederung). SKR04 = Prozessgliederungsprinzip (nach Betriebsabläufen). SKR03: Freie Berufe/Handel. SKR04: Industrie.",
    longAnswer: "Kontenrahmen im Vergleich:\n\nSKR03 (Standardkontenrahmen 03):\n• Gliederungsprinzip: Abschlussgliederung (wie Bilanz/GuV)\n• Kontenklassen:\n  0 = Anlagevermögen\n  1 = Umlaufvermögen\n  2 = Eigenkapital, Rückstellungen, Verbindlichkeiten\n  3 = Wareneingang, Bestandsveränderungen\n  4 = Betriebliche Aufwendungen\n  8 = Erlöse\n  9 = Abschlusskonten\n• Empfohlen für: Handel, freie Berufe, Dienstleister\n\nSKR04 (Standardkontenrahmen 04):\n• Gliederungsprinzip: Prozessgliederung (Betriebsablauf)\n• Kontenklassen:\n  0 = Anlagevermögen\n  1 = Finanzkonten (Bank, Kasse)\n  2 = Abgrenzungskonten\n  3 = Vorräte, Forderungen\n  4 = Eigenkapital, Rückstellungen\n  5 = Verbindlichkeiten\n  6 = Aufwendungen\n  7 = Erträge\n• Empfohlen für: Industrie, produzierende Unternehmen\n\nPraxis: DATEV nutzt beide, Steuerberater wählen je nach Branche",
    tags: ["#Buchungssatz", "#SKR03", "#SKR04", "#Kontenrahmen"],
    hint: "SKR03=Abschlussgliederung (Handel), SKR04=Prozessgliederung (Industrie)"
  },
  {
    id: 44,
    category: "Zahlungsverkehr",
    topic: "Mahnbescheid und Inkasso",
    difficulty: "mittel",
    question: "Welche Schritte umfasst das gerichtliche Mahnverfahren? Was ist der Unterschied zu einem Inkassounternehmen?",
    shortAnswer: "Mahnverfahren: Mahnbescheid → Widerspruch oder Vollstreckungsbescheid → Zwangsvollstreckung. Inkasso: außergerichtlich, Unternehmen kauft/treibt Forderung ein.",
    longAnswer: "Gerichtliches Mahnverfahren (§688 ZPO):\n\nSchritt 1: Mahnbescheid beantragen\n• Beim zuständigen Mahngericht\n• Online über www.online-mahnantrag.de\n• Kosten: Gerichtsgebühr (ca. 32 € bei 1.000 €)\n\nSchritt 2: Zustellung an Schuldner\n• Schuldner hat 2 Wochen Zeit\n\nSchritt 3a: Kein Widerspruch\n→ Vollstreckungsbescheid beantragen\n→ Rechtskräftiger Titel für 30 Jahre\n→ Zwangsvollstreckung möglich (Pfändung)\n\nSchritt 3b: Widerspruch\n→ Übergang ins streitige Klageverfahren\n\nInkassounternehmen (außergerichtlich):\n• Kauft Forderungen (Factoring) oder treibt auf Provision ein\n• Schneller, aber Kosten für Gläubiger\n• Schuldner zahlt Inkassogebühren zusätzlich\n• Reguliert durch RDG (Rechtsdienstleistungsgesetz)\n\nVergleich:\n• Mahnverfahren: Billiger, aber langsamer\n• Inkasso: Schneller, aber teurer (10–25% Provision)",
    tags: ["#Zahlungsverkehr", "#Mahnverfahren", "#Inkasso", "#Forderungen"],
    hint: "Mahnbescheid → Vollstreckungsbescheid → Zwangsvollstreckung"
  },
  {
    id: 45,
    category: "Zeitliche Abgrenzung",
    topic: "Antizipative Abgrenzung Zinsen",
    difficulty: "schwer",
    question: "Ein Unternehmen hat 50.000 € zu 4% p.a. angelegt. Zinsgutschrift erfolgt am 31.03. des Folgejahres. Welche Abgrenzung ist zum 31.12. nötig?",
    shortAnswer: "Sonstige Forderungen 1.500 an Zinserträge 1.500. (Okt–Dez = 3 Monate: 50.000 × 4% × 3/12 = 500 €... Korrektur: 50.000 × 4% × 9/12 = 1.500 €)",
    longAnswer: "Antizipative Abgrenzung (aktiv):\n\nGegeben:\n• Anlage: 50.000 € seit 01.04.\n• Zinssatz: 4% p.a.\n• Zinsgutschrift: 31.03. Folgejahr\n• Bilanzstichtag: 31.12.\n\nAufgelaufene Zinsen (01.04. – 31.12. = 9 Monate):\n50.000 × 4% × 9/12 = 50.000 × 0,04 × 0,75 = 1.500 €\n\nDiese Zinsen sind wirtschaftlich im alten Jahr entstanden,\nwerden aber erst im neuen Jahr gutgeschrieben.\n→ Aktiv-antizipative Abgrenzung!\n\nBuchungssatz 31.12.:\nSonstige Forderungen (Zinsforderungen)  1.500 €\n  an Zinserträge                              1.500 €\n\nBuchungssatz 31.03. (Gutschrift):\nBank                  2.000 €  (50.000 × 4% = 2.000 €)\n  an Sonstige Forderungen  1.500 €  (Auflösung)\n  an Zinserträge             500 €  (Jan–Mrz = 3 Monate)\n\nMerke: Sonstige Forderungen = Aktivkonto (Umlaufvermögen)",
    tags: ["#Abgrenzung", "#Antizipativ", "#Zinsen", "#Sonstige Forderungen"],
    hint: "Aufgelaufene Zinsen = Sonstige Forderungen an Zinserträge"
  },
  {
    id: 46,
    category: "Zeitliche Abgrenzung",
    topic: "Urlaubsrückstellung",
    difficulty: "mittel",
    question: "Ein Mitarbeiter hat zum 31.12. noch 5 Urlaubstage. Sein Tageslohn beträgt 150 €. Buchungssatz für die Urlaubsrückstellung?",
    shortAnswer: "Personalaufwand 750 an Urlaubsrückstellung 750. (5 Tage × 150 €/Tag = 750 €)",
    longAnswer: "Urlaubsrückstellung:\n\nBerechnung:\n• Offene Urlaubstage: 5\n• Tageslohn: 150 €\n• Rückstellung: 5 × 150 = 750 €\n\nBuchungssatz 31.12. (Bildung):\nPersonalaufwand (Löhne)  750 €\n  an Urlaubsrückstellung    750 €\n\nBuchungssatz im Folgejahr (Verbrauch – Urlaub wird genommen):\nUrlaubsrückstellung  750 €\n  an Bank/Verbindlichkeiten  750 €\n\nBuchungssatz (Auflösung – Urlaub verfällt):\nUrlaubsrückstellung  750 €\n  an Sonstige Erträge    750 €\n\nBesonderheiten:\n• Sozialversicherungsbeiträge (ca. 20%) hinzurechnen!\n• Vollständige Rückstellung: 5 × 150 × 1,20 = 900 €\n• Urlaubsanspruch verjährt nach §7 BUrlG am 31.03. des Folgejahres\n  (außer bei Übertragungsvereinbarung)\n\nBilanzausweis: Rückstellungen (Passivseite)",
    tags: ["#Jahresabschluss", "#Rückstellungen", "#Urlaub", "#Personal"],
    hint: "Urlaubsrückstellung = Tage × Tageslohn (+ SV-Beiträge)"
  },
  {
    id: 47,
    category: "Prüfungsaufgaben",
    topic: "Skonto-Buchungssatz komplett",
    difficulty: "schwer",
    question: "Buchen Sie: Warenverkauf 6.000 € netto auf Ziel. Kunde zahlt nach 8 Tagen mit 2,5% Skonto. MwSt. 19%. Alle Buchungssätze.",
    shortAnswer: "Verkauf: Ford. 7.140 an Umsatz 6.000 + USt 1.140. Zahlung: Bank 6.952,50 + Skontoaufw. 150 + USt 28,50 an Ford. 7.140.",
    longAnswer: "Vollständige Buchungskette:\n\nGegeben:\n• Netto: 6.000 €\n• MwSt. 19%: 1.140 €\n• Brutto: 7.140 €\n• Skontosatz: 2,5%\n\n1. BUCHUNGSSATZ WARENVERKAUF:\nForderungen a.L.L.  7.140 €\n  an Umsatzerlöse       6.000 €\n  an Umsatzsteuer       1.140 €\n\n2. BUCHUNGSSATZ ZAHLUNGSEINGANG (nach 8 Tagen mit Skonto):\nSkonto auf Netto: 6.000 × 2,5% = 150 €\nMwSt.-Korrektur: 150 × 19% = 28,50 €\nZahlungseingang: 7.140 − 150 − 28,50 = 6.961,50 €\n\nBank                    6.961,50 €\nSkontoaufwand             150,00 €\nUmsatzsteuer               28,50 €\n  an Forderungen a.L.L.      7.140,00 €\n\nKontrolle: 6.961,50 + 150 + 28,50 = 7.140 € ✓\n\nGuV-Auswirkung:\n• Umsatzerlöse: +6.000 €\n• Skontoaufwand: −150 €\n• Netto-Ertrag: 5.850 €",
    tags: ["#Buchungssatz", "#Skonto", "#Warenverkauf", "#Prüfung"],
    hint: "Skonto auf Netto, MwSt.-Korrektur = Skonto × 19%"
  },
  {
    id: 48,
    category: "Zeitliche Abgrenzung",
    topic: "Passive antizipative Abgrenzung",
    difficulty: "schwer",
    question: "Ein Unternehmen schuldet zum 31.12. noch Stromkosten für November und Dezember (Abrechnung kommt im Januar). Schätzung: 800 €. Buchungssatz?",
    shortAnswer: "Energieaufwand 800 an Sonstige Verbindlichkeiten 800. (Passiv-antizipativ: Aufwand entstanden, Rechnung noch nicht da)",
    longAnswer: "Passiv-antizipative Abgrenzung:\n\nSituation:\n• Strom wurde verbraucht (Nov + Dez)\n• Rechnung kommt erst im Januar\n• Aufwand ist wirtschaftlich im alten Jahr entstanden\n→ Passiv-antizipative Abgrenzung!\n\nBuchungssatz 31.12.:\nEnergieaufwand (Strom)  800 €\n  an Sonstige Verbindlichkeiten  800 €\n\nBuchungssatz Januar (Rechnung kommt, z.B. 820 €):\nSonstige Verbindlichkeiten  800 €\nEnergieaufwand               20 €  (Differenz)\n  an Verbindlichkeiten a.L.L.  820 €\n\nOder wenn Schätzung zu hoch (z.B. Rechnung 780 €):\nSonstige Verbindlichkeiten  800 €\n  an Verbindlichkeiten a.L.L.  780 €\n  an Energieaufwand             20 €  (Ertrag im neuen Jahr)\n\nMerke:\n• Sonstige Verbindlichkeiten = Passivkonto\n• Unterschied zu Rückstellung: Betrag bekannt (oder gut schätzbar)\n• Rückstellung: Betrag und/oder Zeitpunkt ungewiss",
    tags: ["#Abgrenzung", "#Antizipativ", "#Sonstige Verbindlichkeiten", "#Strom"],
    hint: "Aufwand entstanden, Zahlung noch nicht: Aufwand an Sonstige Verbindlichkeiten"
  },
  {
    id: 49,
    category: "Prüfungsaufgaben",
    topic: "Gesamtübersicht Abgrenzung",
    difficulty: "mittel",
    question: "Ordnen Sie zu: a) Miete für Jan gezahlt im Dez. b) Zinsen für Dez. werden im Jan. gutgeschrieben. c) Vorauszahlung Miete für Feb erhalten im Jan. d) Strom Nov–Dez, Rechnung kommt im Jan.",
    shortAnswer: "a) ARAP (transitorisch aktiv). b) Sonstige Forderungen (antizipativ aktiv). c) PRAP (transitorisch passiv). d) Sonstige Verbindlichkeiten (antizipativ passiv).",
    longAnswer: "Abgrenzungsmatrix:\n\na) Miete für Jan. gezahlt im Dez.\n→ Ausgabe jetzt, Aufwand später\n→ ARAP (aktiv-transitorisch)\n→ Buchung: ARAP an Mietaufwand\n\nb) Zinsen für Dez. werden im Jan. gutgeschrieben\n→ Ertrag jetzt entstanden, Einnahme später\n→ Sonstige Forderungen (aktiv-antizipativ)\n→ Buchung: Sonstige Forderungen an Zinserträge\n\nc) Vorauszahlung Miete für Feb. erhalten im Jan.\n→ Einnahme jetzt, Ertrag später\n→ PRAP (passiv-transitorisch)\n→ Buchung: Mieterlöse an PRAP\n\nd) Strom Nov–Dez, Rechnung kommt im Jan.\n→ Aufwand jetzt entstanden, Ausgabe später\n→ Sonstige Verbindlichkeiten (passiv-antizipativ)\n→ Buchung: Energieaufwand an Sonstige Verbindlichkeiten\n\nÜbersichtstabelle:\n         | Aktiv          | Passiv\nTransit. | ARAP           | PRAP\nAntizip. | Sonst.Ford.    | Sonst.Verb.",
    tags: ["#Abgrenzung", "#ARAP", "#PRAP", "#Antizipativ", "#Prüfung"],
    hint: "Transitorisch=Zahlung vor Leistung. Antizipativ=Leistung vor Zahlung"
  },
  {
    id: 50,
    category: "Prüfungsaufgaben",
    topic: "Komplette Jahresabschluss-Aufgabe",
    difficulty: "schwer",
    question: "Zum 31.12. sind folgende Sachverhalte zu buchen: 1) Maschine 24.000 €, ND 4 Jahre, linear. 2) Versicherung 1.200 € für Jan–Jun nächstes Jahr bereits gezahlt. 3) Garantierückstellung 2.000 €. Alle Buchungssätze?",
    shortAnswer: "1) AfA 6.000 an Maschinen 6.000. 2) ARAP 1.200 an Versicherungsaufw. 1.200. 3) Garantieaufw. 2.000 an Rückstellungen 2.000.",
    longAnswer: "Jahresabschluss-Buchungen:\n\n1. ABSCHREIBUNG Maschine:\nJährliche AfA = 24.000 / 4 = 6.000 €\n\nAbschreibungen auf Sachanlagen  6.000 €\n  an Maschinen                      6.000 €\n\nBuchwert nach Jahr 1: 24.000 − 6.000 = 18.000 €\n\n2. ARAP Versicherung:\nVersicherung für Jan–Jun = 1.200 €\n→ Vollständig im neuen Jahr → ARAP = 1.200 €\n\nARAP  1.200 €\n  an Versicherungsaufwand  1.200 €\n\n(Auflösung 01.01.: Versicherungsaufwand an ARAP 1.200 €)\n\n3. GARANTIERÜCKSTELLUNG:\nGarantieaufwand  2.000 €\n  an Rückstellungen  2.000 €\n\nAuswirkung auf Jahresergebnis:\n• AfA: −6.000 € (Aufwand)\n• ARAP: kein Effekt auf GuV (nur Bilanz)\n• Rückstellung: −2.000 € (Aufwand)\n• Gesamt GuV-Belastung: −8.000 €\n\nBilanzveränderungen:\n• Maschinen: −6.000 € (Abschreibung)\n• ARAP: +1.200 € (neuer Aktivposten)\n• Rückstellungen: +2.000 € (neuer Passivposten)",
    tags: ["#Jahresabschluss", "#AfA", "#ARAP", "#Rückstellungen", "#Prüfung"],
    hint: "AfA=AK/ND, ARAP=Ausgabe jetzt/Aufwand später, Rückstellung=Aufwand an Rückst."
  }
];

// ── HILFSFUNKTIONEN ──────────────────────────────────────────────────────────
function getQuestionOfTheDay() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return AVS_QUESTIONS[dayOfYear % AVS_QUESTIONS.length];
}

function getRandomQuestion(excludeId = null) {
  const pool = excludeId ? AVS_QUESTIONS.filter(q => q.id !== excludeId) : AVS_QUESTIONS;
  return pool[Math.floor(Math.random() * pool.length)];
}

function getCategories() {
  return [...new Set(AVS_QUESTIONS.map(q => q.category))];
}
