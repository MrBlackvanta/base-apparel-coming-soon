import heroDesktopLg from "@/assets/images/hero-desktop-lg.webp";
import heroDesktop from "@/assets/images/hero-desktop.webp";
import heroMobile from "@/assets/images/hero-mobile.webp";
import { LogoIcon } from "@/components/icons";
import Attribution from "@/components/layout/attribution";
import SubscribeForm from "@/components/subscribe-form";

export default function Page() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_auto_1fr_auto] v-pattern md:grid-cols-[830fr_610fr] md:grid-rows-[auto_1fr_auto]">
      <header className="flex h-21 items-center v-content-x md:h-auto md:pt-16.25">
        <LogoIcon className="h-auto w-25 text-dark-grayish-red md:w-39.5" />
      </header>

      <picture className="block md:relative md:col-start-2 md:row-start-1 md:row-end-4">
        <source
          media="(min-width: 30rem)"
          srcSet={`${heroDesktop.src} 610w, ${heroDesktopLg.src} 896w`}
          sizes="(min-width: 48rem) 42.36vw, 100vw"
        />
        <img
          src={heroMobile.src}
          width={heroMobile.width}
          height={heroMobile.height}
          alt="A model in an orange short-sleeved shirt resting a hand against their temple, framed by tropical foliage."
          fetchPriority="high"
          className="aspect-3/2 w-full object-cover xs:aspect-auto xs:h-80 xs:object-[center_10%] md:absolute md:inset-0 md:h-full md:object-center"
        />
      </picture>

      <main className="v-content-x md:col-start-1 md:row-start-2">
        <div className="mx-auto max-w-111.25 pt-16 text-center md:mx-0 md:pt-34 md:text-left">
          <h1 className="text-heading tracking-heading uppercase md:text-heading-md lg:text-heading-lg">
            <span className="block font-light text-desaturated-red md:leading-12 lg:leading-16">
              We&rsquo;re{" "}
            </span>
            <span className="block font-semibold text-dark-grayish-red">
              coming{" "}
              <br />
              soon
            </span>
          </h1>
          <p className="mt-4 text-body md:mt-4.5 md:text-body-lg">
            Hello fellow shoppers! We&rsquo;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements and
            our launch deals.
          </p>
          <SubscribeForm />
        </div>
      </main>

      <footer className="v-content-x md:col-start-1 md:row-start-3">
        <Attribution />
      </footer>
    </div>
  );
}
