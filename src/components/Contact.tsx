import { socialLinks } from "./socials";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section className="max-w-xs m-auto mt-12 md:mt-32 text-center">
      <div className="capitalize font-bold text-lg">keep in touch</div>
      <div className="text-gray-600 dark:text-kjColorLight text-sm mt-8">{site.location}</div>
      <div className="mt-4 font-medium text-xl">
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>
      <div className="mt-12 flex justify-center gap-5">
        {socialLinks.map(({ key, href, Icon }) => (
          <a key={key} href={href} target="_blank" rel="noreferrer" aria-label={key}>
            <Icon className="text-2xl" />
          </a>
        ))}
      </div>
    </section>
  );
}
