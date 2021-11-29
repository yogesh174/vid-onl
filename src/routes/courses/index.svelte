<script context="module">
	export async function load({ session }) {
		const user = session.user;

		if (!user) {
			return {
				status: 302,
				redirect: `/login`
			};
		}

		const data = { user };
		data.courses = await api.get('courses', session.jwt);

		return { props: data };
	}
</script>

<script>
	import { session } from '$app/stores';
	import * as api from '$lib/api';
	import Icon from '@iconify/svelte';
	import CourseCard from '$lib/CourseCard.svelte';
	export let courses, user;

	const addCourse = () => {
		const formElement = document.querySelector('form#course-form');
		const formElements = formElement.elements;

		const data = {};

		for (let i = 0; i < formElements.length; i++) {
			const currentElement = formElements[i];
			data[currentElement.name] = currentElement.value;
		}

		data.owner = user.id;

		const response = api.post('courses', data, $session.jwt);
		response.then((data) => {
			if (!data.error) location.reload();
		});
	};
</script>

<svelte:head>
	<title>Courses</title>
</svelte:head>

<div class="container my-12 mx-auto px-4 md:px-12">
	<div class="flex flex-wrap -mx-1 lg:-mx-4">
		{#each courses as course}
			<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
				<CourseCard
					title={course.title}
					author={course.owner.username}
					description={course.description}
					courseId={course.id}
				/>
			</div>
		{/each}
	</div>
</div>

{#if user.role.name === 'Admin' || user.role.name === 'Librarian'}
	<label
		for="my-modal-2"
		class="btn btn-primary btn-circle btn-lg absolute bottom-2 right-2 modal-button"
	>
		<Icon icon="bi:plus-lg" width="30" height="30" />
	</label>

	<input type="checkbox" id="my-modal-2" class="modal-toggle" />

	<div class="modal">
		<div class="modal-box">
			<form on:submit|preventDefault={addCourse} id="course-form">
				<div class="px-4 py-5 space-y-6 sm:p-6">
					<div class="form-control w-3/5">
						<label class="label">
							<span class="label-text">Title</span>
						</label>
						<input
							type="text"
							placeholder="Course Title"
							name="title"
							class="input input-primary input-bordered"
						/>
					</div>

					<div class="form-control w-3/5 ">
						<label class="label">
							<span class="label-text">Description</span>
						</label>

                        <textarea name="description" rows="3" cols="50" class="input input-primary input-bordered h-4/5" placeholder="Description" />

					</div>
				</div>

				<div class="modal-action">
					<label for="my-modal-2">
						<button for="my-modal-2" class="btn btn-primary" type="submit"> Add course </button>
					</label>
					<label for="my-modal-2" class="btn">Close</label>
				</div>
			</form>
		</div>
	</div>
{/if}
