import LinkdedinBrandSvg from "@images/linked_in_brand";
import GithubBrandSvg from "@images/github_brand";
import {useTranslations} from 'next-intl';

export interface SocialMediaProps extends React.ComponentProps<"div"> {}

export default function SocialMedia({ ...props }: SocialMediaProps) {
  let divClasses = "flex place-items-center gap-[30px]";
  props.className = props.className
    ? divClasses + " " + props.className
    : divClasses;
  let aClasses = "hover:underline flex place-items-center gap-[15px]";
  const t = useTranslations('SocialMedia');
  return (
    <div {...props}>
      <a
        href={t('LinkedInLink')}
        title="Linked In"
        target="_blank"
        className={aClasses}
      >
        <LinkdedinBrandSvg />
        Linked In
      </a>
      <a
        href="https://github.com/antoniozanotti"
        title="GitHub"
        target="_blank"
        className={aClasses}
      >
        <GithubBrandSvg />
        GitHub
      </a>
    </div>
  );
}
