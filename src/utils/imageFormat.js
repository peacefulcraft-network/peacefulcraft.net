const CONVERTIBLE_IMAGE_PATTERN = /\.(png|jpe?g)(\?.*)?$/i;

export const toWebpAssetPath = (src) => {
	if (typeof src !== 'string') {
		return src;
	}

	return src.replace(CONVERTIBLE_IMAGE_PATTERN, '.webp$2');
};

export const toWebpBackgroundImage = (src) => {
	if (typeof src !== 'string') {
		return src;
	}

	const webpSrc = toWebpAssetPath(src);
	if (webpSrc === src) {
		return `background-image: url('${src}')`;
	}

	return `background-image: image-set(url('${webpSrc}') type('image/webp'), url('${src}'))`;
};
