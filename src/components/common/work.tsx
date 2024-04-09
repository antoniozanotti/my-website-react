"use client";
import { useState } from "react";
import Heading from "@/components/ui/heading";
import Grid from "@/components/ui/grid";
import List from "@/components/ui/list";
import { TzTag } from "topaz-react";
import { styles } from "@/components/utils/styles";
import type { VersionType } from "@/const/version";
import versionType from "@/const/version";
import { motion } from "framer-motion";
import { Link } from "@/components/common/link";

export interface PositionProps extends React.ComponentProps<"div"> {
  title: string;
  company: string;
  location?: string;
  period: string;
  achievements: string[];
  links?: Link[];
  skills?: string[];
}

export default function Position({
  title,
  company,
  location,
  period,
  achievements,
  links,
  skills,
  ...props
}: PositionProps) {
  const [versionAchievements, setVersionAchievements] = useState<VersionType>(
    versionType.SHORT
  );

  const limit = 3;

  return (
    <div {...props}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Heading level="h3" title={title} />
        <Grid cols={3} className="mt-4 space-y-4">
          <div className="grid grid-flow-row auto-rows-max">
            <span>{company}</span>
            {location && (
              <span className="italic text-c2 lg:text-c3">{location}</span>
            )}
            <span className="font-bold py-4">{period}</span>
            {skills && (
              <div className="flex flex-wrap gap-2">
                {skills?.map((skill, index) => (
                  <TzTag key={index} label={skill} variant="secondary" />
                ))}
              </div>
            )}
          </div>
          <div className="col-span-2 space-y-4">
            <div className="space-y-4">
              {achievements.map(
                (achievement, index) =>
                  (versionAchievements == versionType.FULL ||
                    index < limit) && (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {achievement}{" "}
                      {versionAchievements == versionType.SHORT &&
                        index == limit - 1 &&
                        achievements.length > limit && (
                          <span
                            className={styles.aHover}
                            onClick={() =>
                              setVersionAchievements(versionType.FULL)
                            }
                          >
                            See more...
                          </span>
                        )}
                    </motion.p>
                  )
              )}
            </div>
            {links && (
              <List className="pl-4">
                {links?.map((link, index) => (
                  <li key={index} className="h-12">
                    <a
                      href={link.link}
                      title={link.label}
                      target="_blank"
                      className={styles.aHover}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </List>
            )}
          </div>
        </Grid>
      </motion.div>
    </div>
  );
}
