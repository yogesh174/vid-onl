<script>
	import { page } from '$app/stores';
	export let name;
</script>

<header>
	<div class="navbar mb-1 shadow-lg bg-neutral text-neutral-content">
		<div class="flex-none hidden lg:flex">
			<label for="my-drawer-2">
				<button class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</label>
		</div>
		<div class="flex-1 hidden px-2 mx-2 lg:flex">
			<span class="text-lg font-bold"> VidOnl </span>
		</div>

		<div class="flex-none">
			<button class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-6 h-6 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/>
				</svg>
			</button>
		</div>
		<div class="flex-none">
			<slot name="avatar">Hello there!</slot>
		</div>

		<div class="flex-none">
			<slot name="logout" />
		</div>
	</div>
</header>
