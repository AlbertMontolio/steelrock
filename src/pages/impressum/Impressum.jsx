import React from  'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 40px;
`

const Paragraph = styled.div`
  margin-bottom: 20px;
`

const Line = styled.div`
  margin-bottom: 4px;
`

const StyledImpressum = styled.div`
  padding: ${({isDesktopOrLaptop}) => isDesktopOrLaptop ? '140px 200px' : '60px 20px'};
`


export const Impressum = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <StyledImpressum isDesktopOrLaptop={isDesktopOrLaptop}>
      <Title>
        Impressum
      </Title>
      <Paragraph>
        <Line>
          Steelrock Family Office GmbH
        </Line>
        <Line>
          Borselstraße 16a
        </Line>
        <Line>
          22765 Hamburg
        </Line>
      </Paragraph>
 
      <Paragraph>
        Handelsregister: AG Hamburg HRB 147786
      </Paragraph>
 
      <Paragraph>
        <Line>
          Geschäftsführer:
        </Line>
        <Line>
          Maxim Pfarherr, Henri C. Stahl
        </Line>
      </Paragraph>
​
      <Paragraph>
        <Line>
          Tel.:      +49 (40) 300882-223
        </Line>
        <Line>
          Fax:      +49 (40) 300882-29
        </Line>
        <Line>
          E-Mail:  info@steelrock.de
        </Line>
      </Paragraph>
 
      <Paragraph>
        Haftungsausschluss
      </Paragraph>

      <Paragraph>
        Haftung für Inhalte
      </Paragraph>

      <Paragraph>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </Paragraph>
​
      <Paragraph>
        Haftung für Links
      </Paragraph>

      <Paragraph>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </Paragraph>
​
      <Paragraph>
        Urheberrecht
      </Paragraph>

      <Paragraph>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </Paragraph>
    </StyledImpressum>
  )
}
