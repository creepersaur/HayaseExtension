import AbstractSource from './abstract.js'

export default new class SeaDex extends AbstractSource {
	/** @type {import('./index.js').SearchFunction} */
	async single(query) {
		console.log("Search query:", query)

		if (!query.toLowerCase().includes("creeper")) return []

		return [
			{
				hash: 'dd8255ecdc7ca55fb0bbf81323d87062db1f6d1c',
				link: 'magnet:?xt=urn:btih:dd8255ecdc7ca55fb0bbf81323d87062db1f6d1c',
				title: 'Creeper Aw man',
				size: 276000000,
				date: new Date('2017-03-30T23:30:01'),
				seeders: 1401,
				leechers: 12,
				accuracy: 'low',
				downloads: 102203
			}
		]
	}

	batch = this.single
	movie = this.single

	async test () {
		return true
	}
}()
