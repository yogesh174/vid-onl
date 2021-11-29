<script context="module">
	export async function load({ page, session }) {
		const user = session.user;

		if (!user) {
			return {
				status: 302,
				redirect: `/login`
			};
		}

		const data = { user };
		data.course = await api.get(`courses/${page.params.id}`, session.jwt);

		return { props: data };
	}
</script>

<script>
	import { session } from '$app/stores';
	import * as api from '$lib/api';
	import { marked } from 'marked';
	import { RingLoader } from 'svelte-loading-spinners';
	import { toasts, ToastContainer, FlatToast, BootstrapToast } from 'svelte-toasts';

	export let course, user;
	let markdown;
	let edit = false;
	let isLoading = false;

	const showToast = () => {
		const toast = toasts.add({
			title: 'Success',
			description: 'Update content!',
			duration: 2000,
			theme: 'dark',
			placement: 'top-center',
			showProgress: true,
			type: 'success',
			onClick: () => {},
			onRemove: () => {}
		});
	};

	const updatePreview = () => (markdown = marked(course.content));
	updatePreview();

	const changeMode = () => {
		updatePreview();
		edit = !edit;
	};

	const saveContent = async () => {
		isLoading = true;
		updatePreview();
		const data = {
			content: course.content
		};
		const response = await api.put(`courses/${course.id}`, data, $session.jwt);
		if (!response.error) {
			showToast();
		}
		isLoading = false;
	};
</script>

<div class="flex flex-col p-10 h-full">
	<div class="flex justify-between">
		<h1>{course.title}</h1>

		{#if user.id === course.owner.id}
			{#if !edit}
				<div>
					<button class="btn btn-primary" on:click={changeMode}> Edit </button>
				</div>
			{:else}
				<div>
					<button class="btn btn-primary" on:click={saveContent}> Save </button>
					<button class="btn btn-primary" on:click={changeMode}> Preview </button>
				</div>
				<ToastContainer let:data>
					<FlatToast {data} />
				</ToastContainer>
			{/if}
		{/if}
	</div>

	{#if isLoading}
		<div class="h-full w-full flex justify-center">
			<div class="m-auto">
				<RingLoader size="5" color="#86d2f9" unit="em" duration="2s" />
			</div>
		</div>
	{:else}
		<div class="h-full">
			{#if edit}
				<textarea
					bind:value={course.content}
					name="content"
					class="input input-primary input-bordered h-full w-full"
					placeholder="Enter your markdown content"
				/>
			{:else}
				<div class="h-full w-full">{@html markdown}</div>
			{/if}
		</div>
	{/if}
</div>
