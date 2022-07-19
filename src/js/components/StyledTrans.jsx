var abbr = {
	'kb.': 'Kata Benda',
	'kkt.': 'Kata Kerja Transitip',
	'kki.': 'Kata Kerja Intransitip',
	'ks.': 'Kata Sifat',
	'kk.': 'Kata Keterangan',
	'kd.': 'Kata Depan',
	'ksm.': 'Kata Sifat',
	'kkb.': 'Kata Kerja',
	'kg.': 'Kata Ganti',
}
var bg_class = {
	'Kata Benda': 'bg-primary',
	'Kata Kerja Transitip': 'bg-info',
	'Kata Kerja Intransitip': 'bg-info',
	'Kata Sifat': 'bg-warning',
	'Kata Keterangan': 'bg-success',
	'Kata Depan': 'bg-secondary',
	'Kata Sifat': 'bg-warning',
	'Kata Kerja': 'bg-info',
	'Kata Ganti': 'bg-danger',
}

var abbrs = Object.keys(abbr).map(a => a.replace('.', '\\.')).join('|');

var abbr_regex = new RegExp(`(?:\\b|-)?(${abbrs}),?\\s?`, 'gi');
// console.log({ abbr, abbr_regex });

/**
 * @param {{text: string}} props
 */
const StyledTrans = props => {
	// console.log(props.text);
	return (
		<div>
			{
				props.text
					.replaceAll(abbr_regex, (match, g1, offset) => {
						// console.log({ match, g1, offset });
						const separator = offset != 0 ? '<br>' : '';
						return `${separator}${abbr[g1]}<sep>`;
					})
					.split('<br>')
					.map((line, index) => {
						var split = line.split('<sep>');
						return (
							<span key={index}>
								{split.length > 1 && <span className={`badge ${bg_class[split[0]]} fw-normal me-1 px-2`}>{split[0]}</span>}
								{split[1] || split[0]}
							</span>
						)
					})
			}
		</div>
	)
}

export default StyledTrans;