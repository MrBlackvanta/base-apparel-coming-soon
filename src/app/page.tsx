import heroDesktop from "@/assets/images/hero-desktop.webp";
import heroMobile from "@/assets/images/hero-mobile.webp";
import { LogoIcon } from "@/components/icons";
import Attribution from "@/components/layout/attribution";

export default function Page() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_auto_1fr_auto] v-pattern md:grid-cols-[830fr_610fr] md:grid-rows-[auto_1fr_auto]">
      <header className="flex h-21 items-center v-content-x md:h-auto md:pt-16.25">
        <LogoIcon className="h-auto w-25 text-dark-grayish-red md:w-39.5" />
      </header>

      <picture className="block md:relative md:col-start-2 md:row-start-1 md:row-end-4">
        <source media="(min-width: 30rem)" srcSet={heroDesktop.src} />
        <img
          src={heroMobile.src}
          width={heroMobile.width}
          height={heroMobile.height}
          alt="A model in an orange short-sleeved shirt resting a hand against their temple, framed by tropical foliage."
          fetchPriority="high"
          className="aspect-3/2 w-full object-cover xs:aspect-auto xs:h-80 xs:object-[center_10%] md:absolute md:inset-0 md:h-full md:object-center"
        />
      </picture>

      <main className="v-content-x md:col-start-1 md:row-start-2" />

      <footer className="v-content-x md:col-start-1 md:row-start-3">
        <Attribution />
      </footer>
    </div>
  );
}
