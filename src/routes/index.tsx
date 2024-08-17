import { spring } from "motion";
import { Motion } from "solid-motionone";

export default function HomePage() {
	return (
		<main class="flex bg-hero-bubbles-amber-100 bg-gray-100 min-h-dvh flex-col justify-center items-center">
			<div class="grow-1 flex flex-col justify-center text-center">
				<h1 class="text-2xl">Strootje.com</h1>

				<Motion.img
					src="https://picsum.photos/200/200"
					alt="aslkdjhalksd"
					class="rounded-full"
					transition={{ easing: spring() }}
					hover={{ scale: 1.1 }}
				/>

				<ul>
					<li>
						<a
							href="https://github.com/strootje"
							target="_blank"
							rel="noreferrer"
						>
							<i class="i-brands:github-alt" />
							<span>Github</span>
						</a>
					</li>

					<li>
						<a
							href="https://linkedin.com/in/basstroosnijder"
							target="_blank"
							rel="noreferrer"
						>
							<i class="i-brands:linkedin" />
							<span>Linkedin</span>
						</a>
					</li>
				</ul>
			</div>

			<footer class="text-sm pt-4 pb-2">
				<nav>
					<ul class="flex gap-2">
						<li>
							<a href="https://stats.strooweb.nl/strootje.com">
								<i class="i-simple:plausibleanalytics" />
								<span>Plausible Stats</span>
							</a>
						</li>

						<li>
							<a href="https://github.com/strootje/site-strootje">
								<i class="i-brands:github" />
								<span>Github Source</span>
							</a>
						</li>
					</ul>
				</nav>
			</footer>
		</main>
	);
}
