import React from 'react'

const Legal = () => {
  return (
<div id="Legal" className="font-body text-ink bg-paper antialiased selection:bg-petrol/20 selection:text-petrol">
      <section className="py-[70px] pb-[30px]">
        <div className="max-w-[1000px] mx-auto px-6">
          <span className="text-[12.5px] font-bold tracking-[.22em] uppercase text-petrol">
            Rechtliches &amp; Downloads
          </span>
          <h1 className="font-display text-navy font-medium text-[clamp(32px,4.6vw,46px)] leading-[1.18] my-[12px]">
            Transparenz, schwarz auf weiß.
          </h1>
          <p className="text-muted max-w-[640px] mb-3">
            Hier finden Sie alle rechtlichen Informationen zur Fairsicherlich Versicherungskanzlei GmbH sowie unsere Vertragsunterlagen zum Download – und jeden Fachbegriff einfach erklärt.
          </p>
          <nav className="flex gap-3 flex-wrap mt-[22px]">
            {[
              { href: "#impressum", label: "Impressum & Offenlegung" },
              { href: "#downloads", label: "Dokumente & Downloads" },
              { href: "#datenschutz", label: "Datenschutzerklärung" },
              { href: "#agb", label: "Vertragsgrundlagen & Vollmacht" },
              { href: "#begriffe", label: "Begriffe einfach erklärt" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="no-underline text-[14px] font-semibold text-navy border-[1.5px] border-line rounded-full px-4 py-[9px] bg-white hover:border-petrol hover:text-petrol transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Impressum Section */}
      <section className="py-16" id="impressum">
        <div className="max-w-[1000px] mx-auto px-6">
          <span className="text-[12.5px] font-bold tracking-[.22em] uppercase text-petrol">
            Impressum &amp; gesetzliche Offenlegung
          </span>
          <h2 className="font-display text-navy font-medium text-[clamp(24px,3.4vw,32px)] leading-[1.18] my-2">
            Fairsicherlich Versicherungskanzlei GmbH
          </h2>
          
          {/* Stitch Card */}
          <div className="bg-white border-[1.5px] border-dashed border-navy/35 rounded-[20px] p-7 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-[6px_18px] text-[15px]">
              {[
                ["Firmenwortlaut", "Fairsicherlich Versicherungskanzlei GmbH"],
                ["Sitz", "Triester Straße 410, Tür 2, 8055 Graz – politische Gemeinde Graz, Österreich"],
                ["Firmenbuchnummer", "FN 681030 s"],
                ["Firmenbuchgericht", "Landesgericht für ZRS Graz"],
                ["GISA-Zahl", "39849236"],
                ["UID-Nummer", "ATU83382439"],
                ["Geschäftsführer", "Aram Hashem"],
                ["Gewerbeberechtigung", "Versicherungsmakler und Berater in Versicherungsangelegenheiten (§ 94 Z 76 iVm § 137 Abs 2 GewO 1994)"],
                ["Mitgliedschaft", "Wirtschaftskammer Steiermark, Fachgruppe Versicherungsmakler und Berater in Versicherungsangelegenheiten"],
                ["Berufsrecht", "Gewerbeordnung 1994 (GewO), Maklergesetz (MaklerG), Standesregeln für Versicherungsvermittlung – abrufbar unter www.ris.bka.gv.at"],
                ["Register-Eintragung", "Versicherungsvermittlerregister – Überprüfung unter www.gisa.gv.at/versicherungsvermittlerregister"],
                ["Beschwerdestelle", "Bundesministerium (Abt I/7), Stubenring 1, 1010 Wien – außergerichtliche Streitbeilegung"],
                ["Kontakt", "+43 670 60 31 857 · office@fairsicherlich.at · www.fairsicherlich.at"],
              ].map(([dt, dd], idx) => (
                <React.Fragment key={idx}>
                  <b className="text-navy">{dt}</b>
                  <span>{dd}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="bg-white border border-line rounded-[14px] p-7 mt-4">
            <h3 className="font-display text-navy text-[19px] mb-2 font-medium">Unabhängigkeit &amp; Vergütung</h3>
            <p className="mb-3">
              Der Vermittler ist Versicherungsvermittler im Sinne des § 137 Abs 2 GewO in der Form Versicherungsmakler und Berater in Versicherungsangelegenheiten. Er vertritt den Kunden im Rahmen des erteilten Vertretungsauftrages und handelt nicht für Rechnung oder im Namen von Versicherungsunternehmen.
            </p>
            <p className="mb-3">
              Der Vermittler ist weder an einem Versicherungsunternehmen beteiligt, noch ist ein Versicherungsunternehmen an ihm beteiligt. Der Rat stützt sich auf eine ausgewogene und persönliche Marktuntersuchung einer hinreichenden Zahl von auf dem österreichischen Markt angebotenen Produkten.
            </p>
            <p className="mb-3">
              Die Vergütung erfolgt in der Regel auf Basis einer Provision, die in der Versicherungsprämie enthalten ist, bzw. einer Kombination gemäß § 1 Abs 9 Z 10 der Standesregeln für Versicherungsvermittlung. Ein allfälliges Honorar wird nur nach gesonderter vorheriger Vereinbarung verrechnet.
            </p>
            <p className="mb-0">
              <strong>Wichtig:</strong> Es werden ausschließlich Versicherungsprodukte vermittelt – auch die Vorsorge &amp; Pension erfolgt über versicherungsbasierte Lösungen (fondsgebundene Lebens- und Pensionsversicherung). Es erfolgt keine Wertpapier-, Anlage- oder Vermögensberatung.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 pt-5" id="downloads">
        <div className="max-w-[1000px] mx-auto px-6">
          <span className="text-[12.5px] font-bold tracking-[.22em] uppercase text-petrol">
            Dokumente &amp; Downloads
          </span>
          <h2 className="font-display text-navy font-medium text-[clamp(24px,3.4vw,32px)] leading-[1.18] my-2">
            Unsere Vertragsunterlagen – jederzeit abrufbar.
          </h2>
          <p className="text-muted max-w-[680px] mb-6">
            Diese Unterlagen erhalten Sie im Zuge der Beratung. Sie können sie hier vorab lesen und herunterladen – daneben jeweils in einfacher Sprache, was das Dokument für Sie bedeutet.
          </p>

          <div className="flex flex-col gap-5">
            {[
              {
                icon: "✍",
                title: "Maklervollmacht",
                desc: "Vollmacht für Versicherungsmakler und Berater in Versicherungsangelegenheiten – Grundlage unserer Vertretung gegenüber Versicherern, Behörden und sonstigen Stellen (inkl. elektronischer Kommunikation nach § 5a VersVG).",
                href: "maklervollmacht.pdf",
                bubble: "Mit der Vollmacht erlauben Sie mir, in Versicherungsfragen für Sie zu sprechen und zu handeln: Verträge anfordern, prüfen, kündigen, Schäden abwickeln. Sie bleibt nur so lange gültig, wie Sie wollen – ein kurzes Schreiben genügt, und sie ist widerrufen."
              },
              {
                icon: "§",
                title: "Versicherungsmaklervertrag",
                desc: "Regelt Auftrag und Pflichten nach § 28 MaklerG: laufende Betreuung, Prüfung der Polizzen, Unterstützung im Schadenfall sowie die Vergütung gemäß § 30 MaklerG. Jederzeit ohne Frist kündbar.",
                href: "maklervertrag.pdf",
                bubble: "Das ist unser „Arbeitsvertrag\": Er hält fest, was ich für Sie tue – Ihre Verträge im Blick behalten, Verbesserungen vorschlagen und im Schadenfall an Ihrer Seite stehen. Bezahlt werde ich in der Regel vom Versicherer über die Provision, nicht extra von Ihnen."
              },
              {
                icon: "☰",
                title: "Beratungsprotokoll (Privat)",
                desc: "Auftragserteilung und Dokumentation der Erstberatung samt gesetzlicher Informationspflichten (§§ 1 und 9 Standesregeln für Versicherungsvermittlung) und DSGVO-Informationen.",
                href: "beratungsprotokoll.pdf",
                bubble: "Hier wird schriftlich festgehalten, worüber wir gesprochen haben und was Sie sich wünschen. So können Sie jederzeit nachlesen, warum ich Ihnen genau diese Lösung empfohlen habe – volle Nachvollziehbarkeit für Sie."
              },
              {
                icon: "◫",
                title: "Beratungsprotokoll Business (inkl. Risikoliste)",
                desc: "Erstberatung für Unternehmen und Freiberufler samt Risikoliste: von Betriebshaftpflicht über Sachversicherung und Kfz bis zu betrieblicher Altersvorsorge und Zukunftsvorsorge.",
                href: "beratungsprotokoll-business.pdf",
                bubble: "Die Risikoliste ist eine Checkliste für Ihren Betrieb: Wir gehen Punkt für Punkt durch, welche Risiken abgesichert werden sollen – und welche bewusst nicht. Nur was Sie ankreuzen, wird Teil meines Auftrags."
              },
            ].map((doc, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-[1.1fr_.9fr] gap-[22px] items-stretch mt-4">
                <div className="bg-white border border-line rounded-[14px] p-6 flex flex-col gap-2">
                  <div className="w-[44px] h-[44px] rounded-[12px] bg-navy/[0.08] text-navy flex items-center justify-center text-[20px]">
                    {doc.icon}
                  </div>
                  <h3 className="font-display text-navy text-[19px] mb-1 font-medium">{doc.title}</h3>
                  <p className="text-[14.5px] text-muted flex-1 mb-2">{doc.desc}</p>
                  <a
                    className="inline-flex items-center gap-2 text-[14.5px] font-bold text-petrol no-underline hover:underline self-start"
                    href={doc.href}
                    download
                  >
                    ⤓ PDF herunterladen
                  </a>
                </div>
                {/* Speech Bubble */}
                <div className="relative bg-[#EAF5F2] border-[1.5px] dashed border-petrol/45 rounded-[18px] p-[20px_22px] text-[14.5px] text-[#1E4A43] self-center before:content-[''] before:absolute before:-left-[11px] md:before:left-[-11px] before:top-[34px] md:before:top-[34px] before:w-[18px] before:h-[18px] before:bg-[#EAF5F2] before:border-l-[1.5px] before:border-b-[1.5px] before:border-dashed before:border-petrol/45 before:rotate-45">
                  <b className="block text-petrol text-[12px] tracking-[.18em] uppercase mb-[6px]">
                    Einfach erklärt
                  </b>
                  {doc.bubble}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Datenschutz Section */}
      <section className="py-16 pt-5" id="datenschutz">
        <div className="max-w-[1000px] mx-auto px-6">
          <span className="text-[12.5px] font-bold tracking-[.22em] uppercase text-petrol">
            Datenschutzerklärung
          </span>
          <h2 className="font-display text-navy font-medium text-[clamp(24px,3.4vw,32px)] leading-[1.18] my-2">
            Informationen gemäß Art 13 ff DSGVO
          </h2>

          <div className="flex flex-col gap-4">
            <div className="bg-white border border-line rounded-[14px] p-7">
              <h3 className="font-display text-navy text-[19px] mb-2 font-medium">Verantwortlicher</h3>
              <p className="mb-0">
                Fairsicherlich Versicherungskanzlei GmbH, Triester Straße 410, Tür 2, 8055 Graz, politische Gemeinde Graz · +43 670 60 31 857 · office@fairsicherlich.at
              </p>
            </div>

            <div className="bg-white border border-line rounded-[14px] p-7">
              <h3 className="font-display text-navy text-[19px] mb-2 font-medium">Zwecke und Rechtsgrundlagen der Verarbeitung</h3>
              <p className="mb-3">
                Im Rahmen der Auftragserfüllung bzw. zur Erfüllung der vertraglichen Verpflichtungen als Versicherungsvermittler kommt es zur (automationsunterstützten) Verarbeitung personenbezogener Daten im Sinne der DSGVO. Rechtsgrundlagen sind insbesondere:
              </p>
              <ul className="list-disc pl-5 mb-3 flex flex-col gap-2">
                <li><strong>Vertragserfüllung</strong> (Art 6 Abs 1 lit b DSGVO iVm § 4 Abs 2 Code of Conduct der Versicherungswirtschaft): Beratung, Vermittlung und laufende Betreuung Ihrer Versicherungsverträge sowie Schadenabwicklung.</li>
                <li><strong>Gesetzliche Verpflichtungen</strong> (Art 6 Abs 1 lit c DSGVO): Dokumentations-, Informations- und Aufbewahrungspflichten nach GewO, MaklerG, VersVG und den Standesregeln für Versicherungsvermittlung.</li>
                <li><strong>Gesundheitsdaten</strong>: Für die Übermittlung von Gesundheitsdaten vom Versicherungsunternehmen an den bevollmächtigten Versicherungsmakler besteht eine gesetzliche Ermächtigung in § 11a Abs 1 iVm § 11c Abs 1 Z 5 VersVG.</li>
              </ul>
              <p className="mb-0">„Personenbezogene Daten\" sind z.B. Name, Geburtsdatum, Adresse, Geschlecht, Telefonnummer, Kfz-Kennzeichen, Gesundheitsdaten oder die Polizzennummer.</p>
            </div>

            <div className="bg-white border border-line rounded-[14px] p-7">
              <h3 className="font-display text-navy text-[19px] mb-2 font-medium">Empfänger</h3>
              <p className="mb-0">
                Ihre Daten werden – soweit für die Auftragserfüllung erforderlich – an Versicherungsunternehmen, den Maklerpool-Partner (Verwaltungs- und Abwicklungsplattform), Behörden sowie berufsrechtlich zur Verschwiegenheit verpflichtete Dienstleister (z.B. Steuerberatung, IT) übermittelt. Eine Übermittlung in Drittländer außerhalb der EU/des EWR findet grundsätzlich nicht statt.
              </p>
            </div>

            <div className="bg-white border border-line rounded-[14px] p-7">
              <h3 className="font-display text-navy text-[19px] mb-2 font-medium">Speicherdauer</h3>
              <p className="mb-0">
                Daten werden für die Dauer der Geschäftsbeziehung sowie darüber hinaus im Rahmen der gesetzlichen Aufbewahrungs- und Dokumentationspflichten (insbesondere UGB, BAO, MaklerG) und zur Wahrung allfälliger Rechtsansprüche gespeichert.
              </p>
            </div>

            <div className="bg-white border border-line rounded-[14px] p-7">
              <h3 className="font-display text-navy text-[19px] mb-2 font-medium">Ihre Rechte</h3>
              <p className="mb-3">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Erteilte Einwilligungen können Sie jederzeit widerrufen. Beschwerden richten Sie an die österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Wien, www.dsb.gv.at.
              </p>
              <p className="mb-0">Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an office@fairsicherlich.at.</p>
            </div>

            <div className="bg-white border border-line rounded-[14px] p-7">
              <h3 className="font-display text-navy text-[19px] mb-2 font-medium">Zugang von Erklärungen</h3>
              <p className="mb-0">
                Nachrichten erreichen den Versicherungsvermittler rechtswirksam innerhalb der Bürozeiten Mo–Fr, 9–16 Uhr. Erklärungen des Kunden reisen auf dessen Gefahr; im Zweifelsfall wird empfohlen, den Zugang telefonisch zu bestätigen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AGB / Vertragsgrundlagen Section */}
      <section className="py-16 pt-5" id="agb">
        <div className="max-w-[1000px] mx-auto px-6">
          <span className="text-[12.5px] font-bold tracking-[.22em] uppercase text-petrol">
            Vertragsgrundlagen
          </span>
          <h2 className="font-display text-navy font-medium text-[clamp(24px,3.4vw,32px)] leading-[1.18] my-2">
            AGB, Maklergesetz &amp; Vollmacht im Überblick
          </h2>

          <div className="flex flex-col gap-4">
            <div className="bg-white border border-line rounded-[14px] p-7">
              <h3 className="font-display text-navy text-[19px] mb-2 font-medium">Allgemeine Geschäftsbedingungen</h3>
              <p className="mb-0">
                Vertragsgrundlage sind die <strong>Allgemeinen Geschäftsbedingungen der österreichischen Versicherungsmakler</strong> in der jeweils gültigen Fassung. Sie werden einvernehmlich zum untrennbaren Inhalt des Versicherungsmaklervertrages gemacht und vor Unterschriftsleistung ausgehändigt.
              </p>
            </div>

            <div className="bg-white border border-line rounded-[14px] p-7">
              <h3 className="font-display text-navy text-[19px] mb-2 font-medium">Pflichten nach § 28 MaklerG</h3>
              <p className="mb-3">Die Interessenwahrung umfasst nach Maßgabe der getroffenen Vereinbarung insbesondere:</p>
              <ul className="list-disc pl-5 mb-3 flex flex-col gap-2">
                <li>Bekanntgabe der durchgeführten Rechtshandlungen und Aushändigung der Polizze samt Versicherungsbedingungen (§ 28 Z 4 MaklerG)</li>
                <li>Prüfung des Versicherungsscheins / der Polizze (§ 28 Z 5 MaklerG)</li>
                <li>Unterstützung bei der Abwicklung vor und nach dem Versicherungsfall, einschließlich Fristenwahrung (§ 28 Z 6 MaklerG)</li>
                <li>Laufende Überprüfung bestehender Verträge und Vorschläge zur Verbesserung des Versicherungsschutzes (§ 28 Z 7 MaklerG)</li>
              </ul>
              <p className="mb-0">
                Der Tätigkeitsbereich bezieht sich auf die vereinbarten Produkte laut Risikoliste; die Interessenwahrung ist grundsätzlich auf Versicherungsunternehmen mit Niederlassung in Österreich und am österreichischen Markt angebotene Produkte beschränkt.
              </p>
            </div>

            <div className="bg-white border border-line rounded-[14px] p-7">
              <h3 className="font-display text-navy text-[19px] mb-2 font-medium">Umfang und Ende der Maklervollmacht</h3>
              <p className="mb-3">
                Die Vollmacht berechtigt im Rahmen der Gewerbeberechtigung zur umfassenden Vertretung in allen Versicherungs- und Schadensangelegenheiten – insbesondere zur Einsicht in Unterlagen, zur Abgabe rechtsverbindlicher Vertragserklärungen (einschließlich Kündigungen und Abschlüssen), zur Entgegennahme von Urkunden, zu Kfz-An-, Ab- und Ummeldungen, zur Schadenabwicklung sowie zu Erklärungen im Zusammenhang mit elektronischer Kommunikation nach § 5a VersVG.
              </p>
              <p className="mb-0">
                Die Bevollmächtigung erlischt durch schriftliche Mitteilung des Kunden (Widerruf) oder durch Zurücklegung durch den Versicherungsmakler. Die Kündigung des Maklervertrages gilt zugleich als Widerruf der Vollmacht; der Vertrag ist von beiden Seiten jederzeit ohne Frist kündbar.
              </p>
            </div>
          </div>

          <p className="mt-[22px] text-[13px] text-muted border-l-[3px] border-petrol pl-4 py-2">
            Hinweis: Diese Seite fasst die wesentlichen Inhalte zusammen; maßgeblich sind die jeweils unterfertigten Dokumente (siehe Downloads). Vor Veröffentlichung empfiehlt sich eine finale rechtliche Prüfung der Texte, z.B. über den Fachverband der Versicherungsmakler.
          </p>
        </div>
      </section>

      {/* Begriffe Section */}
      <section className="py-16 pt-5" id="begriffe">
        <div className="max-w-[1000px] mx-auto px-6">
          <span className="text-[12.5px] font-bold tracking-[.22em] uppercase text-petrol">
            Begriffe einfach erklärt
          </span>
          <h2 className="font-display text-navy font-medium text-[clamp(24px,3.4vw,32px)] leading-[1.18] my-2">
            Fachchinesisch? Nicht bei mir.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mt-5">
            {[
              ["Polizze", "Ihr Versicherungsschein – die Urkunde, die bestätigt, was genau versichert ist und zu welchen Bedingungen."],
              ["Provision / Courtage", "Meine Vergütung, die der Versicherer bezahlt. Sie ist bereits in Ihrer Prämie enthalten – Sie zahlen also nichts extra für die Beratung."],
              ["Fondsgebundene Lebensversicherung", "Eine Versicherung, bei der Ihre Beiträge in Versicherungsfonds veranlagt werden – zum langfristigen Aufbau einer Zusatzpension. Ein Versicherungsprodukt, keine Wertpapierberatung."],
              ["Risikoliste", "Eine Checkliste, auf der wir gemeinsam ankreuzen, welche Bereiche ich für Sie betreuen soll – und welche nicht."],
              ["IPID", "Ein standardisiertes Produktinformationsblatt: eine Kurzübersicht, was eine Versicherung abdeckt und was nicht – zum schnellen Vergleichen."],
              ["Prämie", "Der Betrag, den Sie für Ihren Versicherungsschutz bezahlen – monatlich, viertel- oder jährlich."],
              ["Wünsche- und Bedürfnistest", "Ein paar gezielte Fragen vor jeder Empfehlung – damit die Lösung wirklich zu Ihrem Leben passt und nicht umgekehrt."],
              ["DSGVO", "Die europäische Datenschutz-Grundverordnung: Sie regelt, wie ich mit Ihren Daten umgehen darf – sorgsam, zweckgebunden und transparent."],
            ].map(([term, desc], idx) => (
              <div key={idx} className="bg-white border border-line rounded-[12px] p-[16px_18px] text-[14.5px]">
                <b className="block text-navy mb-[3px] text-[15.5px]">{term}</b>
                {desc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep text-[#B9C6DC] py-[44px] pb-[30px] text-[14px] mt-[60px]">
        <div className="max-w-[1000px] mx-auto px-6 flex justify-between gap-4 flex-wrap">
          <span>© 2026 Fairsicherlich Versicherungskanzlei GmbH · FN 681030 s · Graz</span>
          <span className="[&_a]:text-[#B9C6DC] [&_a:hover]:text-[#8FD6C9]">
            <a href="fairsicherlich_neu.html" className="no-underline">Zur Startseite</a> &nbsp;·&nbsp; <a href="#impressum" className="no-underline">Impressum</a> &nbsp;·&nbsp; <a href="#datenschutz" className="no-underline">Datenschutz</a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Legal
