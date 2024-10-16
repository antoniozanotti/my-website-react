import { useTranslations } from "next-intl";
import { LinkedInBrand } from "@images/linked_in_brand";
import { GithubBrand } from "@images/github_brand";

export function SocialMedia({ ...props }: React.ComponentProps<"div">) {
  const t = useTranslations("SocialMedia");
  const baseStyles = "flex place-items-center gap-[30px]";
  props.className = props.className
    ? `${baseStyles} ${props.className}`
    : baseStyles;
  const aStyles = "hover:underline flex place-items-center gap-[15px]";

  return (
    <div {...props}>
      <a
        href={t("LinkedInLink")}
        title="Linked In"
        target="_blank"
        className={aStyles}
      >
        <LinkedInBrand />
        Linked In
      </a>
      <a
        href="https://github.com/antoniozanotti"
        title="GitHub"
        target="_blank"
        className={aStyles}
      >
        <GithubBrand />
        GitHub
      </a>
    </div>
  );
}
