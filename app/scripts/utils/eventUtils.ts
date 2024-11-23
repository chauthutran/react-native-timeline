import * as Constant from "@/app/scripts/constants";


export const getEventClazzByAdvStage = ( advStage: string ) => {
	let clazz = "";
	switch( advStage ){
		case Constant.DV_ADV_STAGE_REGRESSION_INTRODUCED:
			clazz = getEventClazz_RegressionIntroduced();
			break;
		case Constant.DV_ADV_STAGE_DEFENDED:
			clazz = getEventClazz_Defended();
			break;
		case Constant.DV_ADV_STAGE_LOSS:
			clazz = getEventClazz_Loss();
			break;
		case Constant.DV_ADV_STAGE_REFORM_INTRODUCED:
			clazz = getEventClazz_ReformIntroduced();
			break;
		case Constant.DV_ADV_STAGE_ADVANCED:
			clazz = getEventClazz_Advanced();
			break;
		case Constant.DV_ADV_STAGE_APPROVED:
			clazz = getEventClazz_Approved();
			break;
		case Constant.DV_ADV_STAGE_IMPLEMENTED:
			clazz = getEventClazz_Implement();
			break;
		default:
			clazz = getEventClazz_Default();
			break;
	}

	return clazz;
}

export const getEventClazz_RegressionIntroduced = () => {
	return "lgnd1";
}

export const getEventClazz_Loss = () => {
	return "lgnd2";
}

export const getEventClazz_Defended = () => {
	return "lgnd3";
}

export const getEventClazz_ReformIntroduced = () => {
	return "lgnd4";
}

export const getEventClazz_Advanced = () => {
	return "lgnd5";
}

export const getEventClazz_Approved = () => {
	return "lgnd6";
}

export const getEventClazz_Implement = () => {
	return "lgnd7";
}

export const getEventClazz_Default = () => {
	return "lgnd0";
}
