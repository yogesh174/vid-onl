<script>
	import { page } from '$app/stores';
	export let title, author, description, courseId;
</script>

<div class="card lg:card-side bordered shadow-lg">
	<div class="card-body">
		<div class="flex justify-between">
			<h2 class="card-title">{title}</h2>
			<span class="text-sm font-bold font-mono">{author}</span>
		</div>
		<p>{description}</p>
		<div class="card-actions">
			<button class="btn-primary btn-sm">
				<a href="/course/{courseId}"> Go to course </a>
			</button>
		</div>
	</div>
</div>
