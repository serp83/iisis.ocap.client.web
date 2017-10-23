export class ConstantList{
    static PROGRAM_VERSION:string = "2.0.4";

    // static FAPI_URL:string = "http://fapi.iisis.ru";
    static FAPI_URL:string = "http://localhost:6082";

//MESSAGES
    static MSG_AnalogListRowCRUDComponent_FILE_LOADED:string = "Успех. Файл загружен. Данные будут загружены в общую базу в ближайшее время";
    static MSG_AnalogListRowCRUDComponent_FAIL_FILE_LOADED:string = "Ошибка загрузки файла. Попробуйте позднее.";
    static MSG_AnalogListRowCRUDComponent_SAVE_ANALOG_OK:string = "Успех. Совсем скоро кросс появится в общей базе.";
    static MSG_AnalogListRowCRUDComponent_SAVE_ANALOG_ERROR:string = "Ошибка записи кросса. Повторите попытку позднее.";

    static MSG_COPY_TO_CLIPBOARD:string = "Скопировано в буфер";

    static MSG_ERROR_WRITE_TO_SERVER:string = "Ошибка записи на сервере. Повторите попытку позднее.";

    static MSG_SETTING_NOT_SET_FILL:string = "Не все настройки приложения заполнены. Функционал будет ограничен";
    static MSG_SETTING_SAVE_OK:string = "Настройки успешно сохранены";
    static MSG_SETTING_FAIL_EMAIL:string = "Неверный формат почтового ящика";

    static MSG_FapiComponent_NOT_SET_EMAIL_TO_SETTING:string = "В настройках не установлена почта. Кроссы показаны не будут";

}