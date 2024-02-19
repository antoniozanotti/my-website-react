import Section from "@/components/ui/section";
import Heading from "@/components/ui/heading";
import Grid from "@/components/ui/grid";
import Cols from "@/components/ui/cols";
import List from "@/components/ui/list";
import { styles } from "@/components/utils/styles";
import TopazBrandSvg from "@images/topaz_brand";
import VueBrandSvg from "@images/topaz_brand";
import ReactBrandSvg from "@images/topaz_brand";

export default function Projects() {
  return (
    <Section title="# Projects">
      <article>
        <Heading level="h3" title="## Topaz" />
        <Grid>
          <Cols className="mt-4">
            <div className="grow-0">
              <TopazBrandSvg />
            </div>
            <div className="grow">
              <p>
                UI component library for Vue or React projects. Features:
                components, color customization, dark and light theme,
                responsive. Topaz is a MIT licensed project. This website was
                built with Topaz for React.
              </p>
            </div>
          </Cols>
          <div className="mt-4 pl-[46px] sm:pl-[0px]">
            <p>Inspired In:</p>
            <List className="mt-4">
              <li>
                <a
                  href="https://spectrum.adobe.com/"
                  title=""
                  target="_blank"
                  className={styles.aHover}
                >
                  Spectrum
                </a>
                , Adobe’s design system
              </li>
              <li>
                <a
                  href="https://github.com/Decathlon/vitamin-web"
                  title=""
                  target="_blank"
                  className={styles.aHover}
                >
                  Vitamin
                </a>
                , Decathlon’s design system
              </li>
              <li>
                <a
                  href="https://github.com/vuetifyjs/vuetify"
                  title=""
                  target="_blank"
                  className={styles.aHover}
                >
                  Vuetify
                </a>
                , Vue Component Framework
              </li>
            </List>
          </div>
        </Grid>
        <Grid>
          <article>
            <Heading level="h4" title="### Topaz for Vue" />
            <Cols className="mt-4">
              <div className="grow-0">
                <VueBrandSvg />
              </div>
              <div>
                <p>
                  Technologies: Vue, UnoCSS, heroicons, TypeScript, Vite, Git,
                  npm, storybook...
                </p>
                <List className="mt-4">
                  <li>
                    <a
                      href="https://topaz-vue.netlify.app/"
                      title=""
                      target="_blank"
                      className={styles.aHover}
                    >
                      Storybook Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/antoniozanotti/topaz-vue"
                      title=""
                      target="_blank"
                      className={styles.aHover}
                    >
                      Github Repository
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.npmjs.com/package/topaz-vue"
                      title=""
                      target="_blank"
                      className={styles.aHover}
                    >
                      NPM Package
                    </a>
                  </li>
                </List>
              </div>
            </Cols>
          </article>
          <article>
            <Heading level="h4" title="### Topaz for React" />
            <Cols className="mt-4">
              <div className="grow-0">
                <ReactBrandSvg />
              </div>
              <div>
                <p>
                  Technologies: React, tailwindcss, heroicons, TypeScript, tsdx,
                  Git, npm, storybook...
                </p>
                <List className="mt-4">
                  <li>
                    <a
                      href="https://topaz-react.netlify.app/"
                      title=""
                      target="_blank"
                      className={styles.aHover}
                    >
                      Storybook Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/antoniozanotti/topaz-react"
                      title=""
                      target="_blank"
                      className={styles.aHover}
                    >
                      Github Repository
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.npmjs.com/package/topaz-react"
                      title=""
                      target="_blank"
                      className={styles.aHover}
                    >
                      NPM Package
                    </a>
                  </li>
                </List>
              </div>
            </Cols>
          </article>
        </Grid>
      </article>
      <article>
        <Heading level="h3" title="## MAD Design Group Ecommerces" />
        <Grid className="mt-4">
          <div className="flex flex-col space-y-4">
            <p>
              For 8 years, I participated in the web development team of MAD
              Design Group, working as a Full Stack Magento Developer.
            </p>
            <p>
              In July 2015, when I was hired, I had the challenge of creating a
              centralized and scalable base for all MAD’s ecommerces. At that
              time, each brand and location had its own code, which made
              maintenance and improvement impractical. This project was built in
              gradual development cycles, until all brands and locations were
              incorporated into the same code. Currently the project has 30
              ecommerces, 5 brands in 6 locations. Below are some of them:
            </p>
            <List className="pl-4">
              <li>
                <a
                  href="https://ecosmartfire.com/"
                  title=""
                  target="_blank"
                  className={styles.aHover}
                >
                  EcoSmart Fire (United States)
                </a>
              </li>
              <li>
                <a
                  href="https://blindedesign.ca/"
                  title=""
                  target="_blank"
                  className={styles.aHover}
                >
                  Blinde Design (Canada)
                </a>
              </li>
              <li>
                <a
                  href="https://e-nrg.com.au/"
                  title=""
                  target="_blank"
                  className={styles.aHover}
                >
                  e-NRG Bioethanol (Australia)
                </a>
              </li>
              <li>
                <a
                  href="https://heatscopeheaters.eu/"
                  title=""
                  target="_blank"
                  className={styles.aHover}
                >
                  HEATSCOPE® Heaters (Europe)
                </a>
              </li>
              <li>
                <a
                  href="https://mad-gl.com/"
                  title=""
                  target="_blank"
                  className={styles.aHover}
                >
                  MAD Design Group (Internacional)
                </a>
              </li>
            </List>
            <p>
              The user experience in ecommerces have always been a relevant
              factor, and therefore, numerous modules have been developed to
              meet customization needs.
            </p>
            <p>
              Some internal processes were automated, such as exporting orders
              and leads to Netsuite (ERP).
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p>
              In addition to ecommerces for end customers, online stores with
              restricted access for B2B were developed, with specific features
              that I do not list here for ethical reasons.
            </p>
            <p>
              In 2018 and 2019, I participated in the migration from Magento 1
              to Magento 2. Due to the high customization and small team, it
              took 1 year to do so, adding up the planning and execution time of
              the project. As if the complexity of code refactoring and data
              migration wasn’t enough, in the same period, the layout of
              ecommerces was also changed.
            </p>
            <p>
              Other less complex tasks were also developed, such as monitoring,
              preventing and inhibiting attacks. Updating PHP and Magento
              versions, SEO optimization…
            </p>
            <p>
              In 2023, we began a migration project to a Jamstack architecture,
              which use Vue. I developed the initial set-up of the project so
              that everyone could develop collaboratively.
            </p>
          </div>
        </Grid>
      </article>
    </Section>
  );
}
