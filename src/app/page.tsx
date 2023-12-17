"use client";
import { TzButton, TzGrid, TzIcon, TzToggleTheme, TzPicture } from "topaz-react";

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
    <TzGrid isRootWrapper>
      <header className="min-h-screen grid grid-rows-4">
        <div className="flex justify-self-end">
          <TzToggleTheme />
        </div>
        <div className="row-span-2">
          <Heading level="h1" title="Antônio Zanotti" className="" />
          <Terminal className="mt-16" />
          <SocialMedia className="mt-32" />
        </div>
        <div className="flex justify-center items-center">
          <TzButton iconName="ArrowDownIcon" variant="secondary" className="animate-bounce" />
        </div>
      </header>
      <main className="pt-40">
        <Section title="# About">
          <TzGrid columns={10} className="pt-20 pb-40">
            <div className="lg:order-last lg:col-start-7 lg:col-span-4">
              <img src={AntonioZanottiImg.src} alt="Antônio Zanotti" className="rounded-full" />
            </div>
            <div className="lg:col-start-2 lg:col-span-4 grid grid-flow-row auto-rows-max gap-7">
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
          </TzGrid>
        </Section>
        <Section title="# Projects" className="pt-40">
          <article className="pt-20">
            <Heading level="h3" title="## Topaz" />
            <TzGrid columns={10} className="pt-16 pb-14">
              <div className="flex justify-self-end">
                <TopazBrandSvg />
              </div>
              <div className="lg:col-span-4">
                <p>
                  UI component library for Vue or React projects. Features:
                  components, color customization, dark and light theme, responsive.
                  Topaz is a MIT licensed project. This website was built with Topaz
                  for React.
                </p>
              </div>
              <div className="lg:col-start-7 lg:col-span-4">
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
            </TzGrid>
            <TzGrid columns={10}>
              <article className="lg:col-start-2 lg:col-span-4">
                <Heading level="h4" title="### Topaz for Vue" />
                <TzGrid columns={5} className="pt-12 pb-32">
                  <div className="flex justify-self-end">
                    <VueBrandSvg />
                  </div>
                  <div className="lg:col-span-4">
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
                </TzGrid>
              </article>
              <article  className="lg:col-start-7 lg:col-span-4">
                <Heading level="h4" title="### Topaz for React" />
                <TzGrid columns={4} className="pt-12 pb-32">
                  <div className="flex justify-self-end">
                  <ReactBrandSvg />
                  </div>
                  <div className="lg:col-span-3">
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
                </TzGrid>
              </article>
            </TzGrid>
          </article>
          <article>
            <Heading level="h3" title="## MAD Design Group Ecommerces" />
            <TzGrid columns={10} className="pt-16">
              <div className="lg:col-start-2 lg:col-span-4 grid grid-flow-row auto-rows-max gap-7">
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
              <div className="lg:col-start-7 lg:col-span-4 grid grid-flow-row auto-rows-max gap-7">
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
            </TzGrid>
          </article>
        </Section>
      </main>
      <footer>
        <Section title="# Let's work together" className="pt-40">
          <TzGrid columns={10} className="pt-20 pb-40">
            <div className="lg:col-start-2 lg:col-span-4">
              <Form />
            </div>
            <div className="lg:col-start-7 lg:col-span-4 lg:pt-8">
              <SocialMedia />
              <img src={AntonioZanotti2Img.src} alt="Antônio Zanotti" className="mt-14 rounded" />
            </div>
          </TzGrid>
          <TzGrid columns={10}>
            <p className="lg:col-start-2 lg:col-span-8 text-center">
              Made with <TzIcon iconName="HeartIcon" variant="secondary" className="inline" /> by Antônio Zanotti
            </p>
            <div className="flex justify-self-end">
              <TzButton iconName="ArrowUpIcon" variant="secondary" className="animate-bounce" />
            </div>
          </TzGrid>
        </Section>
      </footer>
    </TzGrid>
  );
}
