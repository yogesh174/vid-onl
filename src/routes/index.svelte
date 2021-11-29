<script context="module">
	export async function load({ session }) {
		const user = session.user;
		if (!user) {
			return {
				status: 302,
				redirect: `/login`
			};
		}
		return {props: {user}};
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<script>
	export let user;
</script>

<div class="flex flex-col items-center justify-center">
	
	<div class="text-center lg:text-left m-20">
		<h1 class="mb-5 text-5xl font-bold">VidOnl</h1>
		<p>Hello there {user.firstName}!</p>
		<p class="mb-5">
			VidOnl is a complete online classes system with tutoring scripts that can be completely
				customized in markdown. Professors can create tutoring scripts in markdown and upload them
				and students can learn from them.
		</p>
		<div class="mb-10">
			
			<p>Checkout other products similar to this</p>
			<ul class="mx-5">
				<li><a href="http://" class="text-purple-300">Hostel management</a></li>
				<li><a href="http://" class="text-purple-300">Online tutorials</a></li>
			</ul>
		</div>
	</div>
</div>