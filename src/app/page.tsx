"use client";
import { TzButton, TzIcon, TzToggleTheme, TzPicture } from "topaz-react";

import { Header } from "@features/header";
import { Code } from "@features/code";
import { Form } from "@features/form";
import { Section } from "@features/section";
import { SocialMedia } from "@features/social-media";
import { Terminal } from "@features/terminal";
import { Heading } from "@features/heading";
import TopazBrandSvg from '@images/topaz_brand';
import ReactBrandSvg from '@images/react_brand';
import VueBrandSvg from '@images/vue_brand';
import AntonioZanottiImg from '@images/antonio_zanotti.jpg';
import AntonioZanotti2Img from '@images/antonio_zanotti_2.jpg';

export default function Home() {
  return (
    <div className="pb-4 sm:pb-8 lg:pb-16 px-4 sm:px-8 lg:px-0 lg:px-16 lg:w-[896px] xl:w-[1152px] lg:mx-auto">
      <Header />
      <main className="">
        <Section title="# About">
          
            <div className="">
              <img src={AntonioZanottiImg.src} alt="Antônio Zanotti" className="rounded-full" />
            </div>
            <div className="">
              <p>
                Senior Full Stack Developer with more than 15 years of
                experience. Looking for long-term opportunities to work as
                Frontend Developer.
              </p>
              <p>
                Comfortable with Vue or React, Next.js or Vite, Storybook,
                UnoCSS+Tailwind CSS, TypeScript, GraphQL… I’m open mind to study
                and adapt me to your Tech Stack.
              </p>
              <p>
                Besides work, I love my husband, we’ve been living together for
                7 years. I also like to study sociology, do exercises at home,
                take a track, go to the beach, hangout with friends,
                watercolour...
              </p>
              <Code />
            </div>
          
        </Section>
        <Section title="# Projects" className="">
          <article className="">
            <Heading level="h3" title="## Topaz" />
            
              <div className="">
                <TopazBrandSvg />
              </div>
              <div className="">
                <p>
                  UI component library for Vue or React projects. Features:
                  components, color customization, dark and light theme, responsive.
                  Topaz is a MIT licensed project. This website was built with Topaz
                  for React.
                </p>
              </div>
              <div className="">
                <p>Inspired In:</p>
                <ul>
                  <li>
                    <a href="" title="" target="_blank">
                      Spectrum
                    </a>
                    , Adobe’s design system
                  </li>
                  <li>
                    <a href="" title="" target="_blank">
                      Vitamin
                    </a>
                    , Decathlon’s design system
                  </li>
                  <li>
                    <a href="" title="" target="_blank">
                      Vuetify
                    </a>
                    , Vue Component Framework
                  </li>
                </ul>
              </div>
            
              <article className="">
                <Heading level="h4" title="### Topaz for Vue" />
                
                  <div className="">
                    <VueBrandSvg />
                  </div>
                  <div className="">
                    <p>
                      Technologies: Vue, UnoCSS, heroicons, TypeScript, Vite, Git,
                      npm, storybook...
                    </p>
                    <ul>
                      <li>
                        <a
                          href="https://topaz-vue.netlify.app/"
                          title=""
                          target="_blank"
                        >
                          Storybook Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/antoniozanotti/topaz-vue"
                          title=""
                          target="_blank"
                        >
                          Github Repository
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.npmjs.com/package/topaz-vue"
                          title=""
                          target="_blank"
                        >
                          NPM Package
                        </a>
                      </li>
                    </ul>
                  </div>
                
              </article>
              <article  className="">
                <Heading level="h4" title="### Topaz for React" />
                
                  <div className="">
                  <ReactBrandSvg />
                  </div>
                  <div className="">
                    <p>
                      Technologies: React, tailwindcss, heroicons, TypeScript, tsdx,
                      Git, npm, storybook...
                    </p>
                    <ul>
                      <li>
                        <a
                          href="https://topaz-react.netlify.app/"
                          title=""
                          target="_blank"
                        >
                          Storybook Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/antoniozanotti/topaz-react"
                          title=""
                          target="_blank"
                        >
                          Github Repository
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.npmjs.com/package/topaz-react"
                          title=""
                          target="_blank"
                        >
                          NPM Package
                        </a>
                      </li>
                    </ul>
                  </div>
                
              </article>
            
          </article>
          <article>
            <Heading level="h3" title="## MAD Design Group Ecommerces" />
            
              <div className="">
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
                <ul>
                  <li>
                    <a href="https://ecosmartfire.com/" title="" target="_blank">
                      EcoSmart Fire (United States)
                    </a>
                  </li>
                  <li>
                    <a href="https://blindedesign.ca/" title="" target="_blank">
                      Blinde Design (Canada)
                    </a>
                  </li>
                  <li>
                    <a href="https://e-nrg.com.au/" title="" target="_blank">
                      e-NRG Bioethanol (Australia)
                    </a>
                  </li>
                  <li>
                    <a href="https://heatscopeheaters.eu/" title="" target="_blank">
                      HEATSCOPE® Heaters (Europe)
                    </a>
                  </li>
                  <li>
                    <a href="https://mad-gl.com/" title="" target="_blank">
                      MAD Design Group (Internacional)
                    </a>
                  </li>
                </ul>
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
              <div className="">
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
            
          </article>
        </Section>
      </main>
      <footer>
        <Section title="# Let's work together" className="">
          
            <div className="">
              <Form />
            </div>
            <div className="">
              <SocialMedia />
              <img src={AntonioZanotti2Img.src} alt="Antônio Zanotti" className="rounded" />
            </div>
          
          
            <p className="text-center">
              Made with <TzIcon iconName="HeartIcon" variant="negative" className="inline" /> by Antônio Zanotti
            </p>
            <div className="">
              <TzButton iconName="ArrowUpIcon" variant="secondary" className="animate-bounce" />
            </div>
          
        </Section>
      </footer>
    </div>
  );
}
