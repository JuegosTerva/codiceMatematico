const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Browser,
		C3.Plugins.TiledBg,
		C3.Plugins.SVGPicture,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Text.Acts.SetInstanceVar,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.System.Cnds.Else
	];
};
self.C3_JsPropNameTable = [
	{Navegador: 0},
	{FondoEnMosaico: 0},
	{titulo: 0},
	{Mouse: 0},
	{Touch: 0},
	{dividendo: 0},
	{FondoTexto: 0},
	{check_btn: 0},
	{recargar: 0},
	{residuo: 0},
	{tabla: 0},
	{fondo: 0},
	{voice_one: 0},
	{box_naranja: 0},
	{btn_juagar: 0},
	{btn_creditos: 0},
	{titulo_creditos: 0}
];

self.InstanceType = {
	Navegador: class extends self.IInstance {},
	FondoEnMosaico: class extends self.ITiledBackgroundInstance {},
	titulo: class extends self.ISVGPictureInstance {},
	Mouse: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	dividendo: class extends self.ITextInstance {},
	FondoTexto: class extends self.ITiledBackgroundInstance {},
	check_btn: class extends self.ISpriteInstance {},
	recargar: class extends self.ISpriteInstance {},
	tabla: class extends self.ITextInstance {},
	fondo: class extends self.ISVGPictureInstance {},
	voice_one: class extends self.ISVGPictureInstance {},
	box_naranja: class extends self.ISVGPictureInstance {},
	btn_juagar: class extends self.ISVGPictureInstance {},
	btn_creditos: class extends self.ISVGPictureInstance {},
	titulo_creditos: class extends self.ISVGPictureInstance {}
}