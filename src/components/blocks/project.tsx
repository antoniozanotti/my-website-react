import { useState } from "react";
import Heading from "@/components/ui/heading";
import Grid from "@/components/ui/grid";
import List from "@/components/ui/list";
import { TzLabel } from "topaz-react";
import { styles } from "@/components/utils/styles";
import type { VersionType } from "@/const/version";
import versionType from "@/const/version";
import { motion } from "framer-motion";

interface Link {
  link: string;
  label: string;
}

export interface PositionProps extends React.ComponentProps<"div"> {
  title: string;
  companyName: string;
  period: string;
  achievements: string[];
  links?: Link[];
  skills?: string[];
  version: VersionType;
}

export default function Position({
  title,
  companyName,
  period,
  achievements,
  links,
  skills,
  version,
  ...props
}: PositionProps) {
  const [versionAchievements, setVersionAchievements] = useState<VersionType>(
    versionType.SHORT
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} {...props}>
      <Heading level="h3" title={title} />
      <Grid cols={3} className="mt-4">
        <div className="grid grid-flow-row auto-rows-max">
          <span>{companyName}</span>
          <span className="font-bold py-4">{period}</span>
          {skills && (
            <div className="flex flex-wrap gap-2">
              {skills?.map((skill, index) => (
                <TzLabel key={index} label={skill} variant="secondary" />
              ))}
            </div>
          )}
        </div>
        <div className="col-span-2 space-y-4">
          <div className="space-y-4">
            {achievements.map(
              (achievement, index) =>
                (versionAchievements == versionType.FULL || index < 2) && (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {achievement}{" "}
                    {versionAchievements == versionType.SHORT &&
                      index == 1 &&
                      achievements.length > 2 && (
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
                <li key={index}>
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
  );
}
