import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const StyledDatenSchutz = styled.div`
  padding: ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? '140px 200px' : '60px 20px'};
`

const Title = styled.div`
  font-weight: bold;
`

const Paragraph = styled.div`
  margin-bottom: 20px;
`

const Line = styled.div`
  margin-bottom: 4px;
`

export const DatenSchutz = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <StyledDatenSchutz isDesktopOrLaptop={isDesktopOrLaptop}>
      <Title>
        Datenschutz
      </Title>
​
      <Paragraph>
        Diese Datenschutzerklärung hat den Zweck, Sie als Nutzer über die Erhebung personenbezogener Daten auf dieser Website zu informieren. Wir legen daher Wert auf eine möglichst transparente Darstellung aller wesentlichen Informationen zu dem Schutz Ihrer Daten. Sollte es dennoch Unklarheiten, Fragen und damit Klärungsbedarf geben, zögern Sie bitte nicht, uns zu kontaktieren.
      </Paragraph>

      <Paragraph>
        1. Verantwortlicher
        Verantwortliche Stelle im Sinne der Datenschutz-Grundverordnung (Art. 4 Abs. 7 DSGVO) und der übrigen nationalen Datenschutzgesetze und datenschutzrechtlicher Bestimmungen ist die Steelrock Family Office GmbH  (vollständige Kontaktdaten siehe Impressum). Diese Kontaktdaten sind damit relevant für alle Fragen datenschutzrechtlicher Natur zu dieser Website sowie für alle datenschutzrechtlichen Ansprüche Ihrerseits.
      </Paragraph>
      
      <Paragraph>
        2. Erhebung und Speicherung personenbezogener Daten beim Besuch unserer Website
        Nachfolgend informieren wir Sie über die datenschutzrechtlich relevanten Vorgänge, die bei einem Aufruf unserer Website stattfinden.
      </Paragraph>

      <Paragraph>
        <Line>
          (a) Logfiles
        </Line>
        <Line>
          Bei jedem Aufruf unserer Website erfassen wir automatisiert Daten und Informationen von dem Computersystem, welches Sie zum Aufruf der Website verwenden.
          Folgende Daten werden hierbei erhoben:
        </Line>
        <Line>
          (i) Informationen über Ihren Browsertyp und die verwendete Version
        </Line>
        <Line>
          (ii) Informationen über Ihr Betriebssystem
        </Line>
        <Line>
          (iii) Datum und Uhrzeit Ihres Zugriffs
        </Line>
        <Line>
          (iv) Websites, von denen Ihr System auf unsere Internetseite gelangt
        </Line>
        <Line>
          (v) Websites, die von Ihrem System über unsere Website aufgerufen werden
        </Line>
        <Line>
          (vi) Ihre IP-Adresse
        </Line>
        Die Logfiles werden frühestmöglich anonymisiert oder gelöscht. Das ist im Normalfall spätestens nach sieben (7) Tagen der Fall.
        Die Verarbeitung der Daten erfolgt zum Zweck der Auslieferung der Inhalte unserer Internetseite, zur Gewährleistung der Funktionsfähigkeit unserer informationstechnischen Systeme, der Optimierung unserer Internetseite. Damit ist die Verarbeitung zur Wahrung unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO, d. h. der Durchführung unserer Geschäftstätigkeit, erforderlich.
        Da die Erfassung der Daten zur Bereitstellung unserer Website und die Speicherung der Daten in Logfiles für den Betrieb unserer Website zwingend erforderlich ist, besteht für Sie auch keine Widerspruchsmöglichkeit.
      </Paragraph>

      <Paragraph>
        <Line>
          (b) Google Maps
        </Line>
        Diese Seite nutzt zur visuellen Darstellung von Kartenmaterial die „Google Maps API“. Anbieter des Materials ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
        Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP Adresse zu speichern. Diese Informationen werden unter anderem an einen Server von Google in den USA übertragen und dort gespeichert. Wir haben keinen Einfluss auf diese Datenübertragung.
        Die Datenschutzerklärung von Google kann hier eingesehen werden: https://www.google.com/policies/privacy/
        Die Verarbeitung der Daten erfolgt zum Zweck der Optimierung unseres Angebotes und unserer Produkte. Die Verarbeitung der genannten Daten ist zur Wahrung unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erforderlich, d. h. der Durchführung unserer Geschäftstätigkeit.
        Der Widerruf dieser Datenspeicherung erfolgt über das Opt-Out: https://adssettings.google.com/authenticated.
      </Paragraph>

      <Paragraph>
        <Line>
          (c) Webfonts
        </Line>
        Auf der Seite werden Schriftarten eingebunden, die nicht bei uns gespeichert sind. Diese Schriftarten werden zu Verfügung gestellt von Google (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland).
        Bei der Darstellung der eingebundenen Schriftarten wird Ihre IP-Adresse an den Anbieter dieser Schriftarten übermittelt.
        Die Datenschutzerklärung von Google kann hier eingesehen werden: https://www.google.com/policies/privacy/
        Das Opt-Out bei Google kann hier erfolgen: http://www.google.com/ads/preferences.
        Die Verarbeitung der Daten erfolgt auf Grundlage unseres berechtigten Interesses, d. h. der Optimierung unseres Internetangebotes nach Art. 6 Abs. 1 lit. f. DSGVO.
      </Paragraph>
      
      <Paragraph>
        <Line>
          3. Kontaktaufnahme
        </Line>
        Sie können mit uns über ein Formular auf der Website, per Telefon oder per E-Mail in Kontakt treten. In diesem Fall werden die Daten, die Sie in das Formular eingeben bzw. per E-Mail an uns schicken oder am Telefon mitteilen, an uns übermittelt und von uns gespeichert.
      </Paragraph>

      <Paragraph>
        <Line>
          Hierbei geht es um:
        </Line>
        <Line>
          (i) Name
        </Line>
        <Line>
          (ii) E-Mail (bzw. Telefonnummer)
        </Line>
        <Line>
          (iii) Datum und Uhrzeit der Kontaktaufnahme
        </Line>
      </Paragraph>

      <Paragraph>
        Wenn Sie Kontakt zu uns aufnehmen und Interesse an unseren Angeboten haben, ist Rechtsgrundlage für die Datenverarbeitung Art. 6 Abs. 1 lit. b DSGVO. Im Übrigen erfolgt die Verarbeitung aufgrund unseres berechtigten Interesses aus Art. 6 Abs. 1 lit. f DSGVO zur Durchführung der Geschäftstätigkeit. Diese an uns übermittelten Daten werden nur für die Durchführung der Konversation verwendet und nicht an Dritte weitergegeben. Wir werden diese Daten löschen, wenn sie für den jeweiligen Zweck nicht weiter benötigt werden. D. h., wenn der Austausch per E-Mail bzw. über das Kontaktformular mit Ihnen beendet ist und wir Ihr Anliegen vollständig bearbeitet haben.
      </Paragraph>
      
      <Paragraph>
        <Line>
          4. Verarbeitung in Drittstaaten im Allgemeinen
        </Line>
        Soweit und sofern oben nicht anders angebenden erfolgt die Verarbeitung Ihrer personenbezogenen Daten in Staaten außerhalb der Europäischen Union (EU) bzw. des Europäischen Wirtschaftsraums (EWR) ausschließlich auf Basis der gesetzlichen Vorgaben nach Art. 44 DSGVO. Vorliegend ist dies ausschließlich der Fall entweder auf Grundlage eines Angemessenheitsbeschlusses des Europäischen Kommission (Art. 45 DSGVO) und/oder auf Basis geeigneter Garantien (Art. 46 DSGVO).
      </Paragraph>
      
      <Paragraph>
        <Line>
          5. Allgemeine Speicherdauer
        </Line>
        Allgemein werden personenbezogene Daten ausschließlich für solange gespeichert, wie es für die Erfüllung des Zwecks der Datenerhebung oder die Einhaltung der jeweiligen gesetzlichen Aufbewahrungsfrist erforderlich ist. Nach Wegfall des Zwecks bzw. Ablauf der Frist erfolgt eine Löschung der Daten.
      </Paragraph>
      
      <Paragraph>
        <Line>
          6. Betroffenenrechte
        </Line>
        <Line>
          Soweit wir personenbezogene Daten von Ihnen verarbeitet haben, sind Sie Betroffener im Sinne der DSGVO und es stehen Ihnen folgende Rechte gegenüber uns zu:
        </Line>
        <Line>
          15 DSGVO – Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen.
        </Line>
        <Line>
          16 DSGVO – Sie können unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.
        </Line>
        <Line>
          17 DSGVO – Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.
        </Line>
        <Line>
          18 DSGVO – Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt haben.
        </Line>
        <Line>
          20 DSGVO – Sie können Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format erhalten oder die Übermittlung an einen anderen Verantwortlichen verlangen.
        </Line>
        <Line>
          7 Abs. 3 DSGVO – Sie können Ihre einmal erteilte Einwilligung jederzeit gegenüber uns widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen.
        </Line>
        <Line>
          77 DSGVO – Sie können sich bei einer Aufsichtsbehörde beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Geschäftssitzes wenden.
        </Line>
      </Paragraph>
      
      <Paragraph>
        <Line>
          7. Widerspruchsrecht
        </Line>
        Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird. Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an die im Impressum angegebene E-Mail-Adresse. Diese Datenschutzerklärung hat den Zweck, Sie als Nutzer über die Erhebung personenbezogener Daten auf dieser Website zu informieren. Wir legen daher Wert auf eine möglichst transparente Darstellung aller wesentlichen Informationen zu dem Schutz Ihrer Daten. Sollte es dennoch Unklarheiten, Fragen und damit Klärungsbedarf geben, zögern Sie bitte nicht, uns zu kontaktieren.
      </Paragraph>

    </StyledDatenSchutz>
  )
}
