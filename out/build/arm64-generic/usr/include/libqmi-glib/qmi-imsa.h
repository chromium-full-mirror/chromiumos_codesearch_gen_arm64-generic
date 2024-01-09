
/* GENERATED CODE... DO NOT EDIT */

/*
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the
 * Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
 * Boston, MA 02110-1301 USA.
 *
 * Copyright (C) 2012 Lanedo GmbH
 * Copyright (C) 2012-2022 Aleksander Morgado <aleksander@aleksander.es>
 */


#include <glib.h>
#include <glib-object.h>
#include <gio/gio.h>

#include "qmi-enums.h"
#include "qmi-enums-imsa.h"
#include "qmi-message.h"
#include "qmi-client.h"

#ifndef __LIBQMI_GLIB_QMI_IMSA__
#define __LIBQMI_GLIB_QMI_IMSA__

G_BEGIN_DECLS

#define HAVE_QMI_MESSAGE_IMSA_GET_IMS_REGISTRATION_STATUS
#define HAVE_QMI_MESSAGE_IMSA_GET_IMS_SERVICES_STATUS

/*****************************************************************************/
/* REQUEST/RESPONSE: Qmi Message IMSA Get IMS Registration Status */


/**
 * SECTION: qmi-message-imsa-get-ims-registration-status
 * @title: IMSA Get IMS Registration Status response
 * @short_description: Methods to manage the IMSA Get IMS Registration Status response.
 *
 * Collection of methods to create requests and parse responses of the IMSA Get IMS Registration Status message.
 */

/* --- Input -- */

/* Note: no fields in the Input container */

/* --- Output -- */

/**
 * QmiMessageImsaGetImsRegistrationStatusOutput:
 *
 * The #QmiMessageImsaGetImsRegistrationStatusOutput structure contains private data and should only be accessed
 * using the provided API.
 *
 * Since: 1.34
 */
typedef struct _QmiMessageImsaGetImsRegistrationStatusOutput QmiMessageImsaGetImsRegistrationStatusOutput;
GType qmi_message_imsa_get_ims_registration_status_output_get_type (void) G_GNUC_CONST;
#define QMI_TYPE_MESSAGE_IMSA_GET_IMS_REGISTRATION_STATUS_OUTPUT (qmi_message_imsa_get_ims_registration_status_output_get_type ())


/**
 * qmi_message_imsa_get_ims_registration_status_output_get_result:
 * @self: a QmiMessageImsaGetImsRegistrationStatusOutput.
 * @error: Return location for error or %NULL.
 *
 * Get the result of the QMI operation.
 *
 * Returns: (skip): %TRUE if the QMI operation succeeded, %FALSE if @error is set.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_registration_status_output_get_result (
    QmiMessageImsaGetImsRegistrationStatusOutput *self,
    GError **error);


/**
 * qmi_message_imsa_get_ims_registration_status_output_get_ims_registration_status:
 * @self: a #QmiMessageImsaGetImsRegistrationStatusOutput.
 * @value_ims_registration_status: (out)(optional): a placeholder for the output #QmiImsaImsRegistrationStatus, or %NULL if not required.
 * @error: Return location for error or %NULL.
 *
 * Get the 'IMS Registration Status' field from @self.
 *
 * Returns: (skip): %TRUE if the field is found, %FALSE otherwise.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_registration_status_output_get_ims_registration_status (
    QmiMessageImsaGetImsRegistrationStatusOutput *self,
    QmiImsaImsRegistrationStatus *value_ims_registration_status,
    GError **error);


/**
 * qmi_message_imsa_get_ims_registration_status_output_get_ims_registration_error_code:
 * @self: a #QmiMessageImsaGetImsRegistrationStatusOutput.
 * @value_ims_registration_error_code: (out)(optional): a placeholder for the output #guint16, or %NULL if not required.
 * @error: Return location for error or %NULL.
 *
 * Get the 'IMS Registration Error Code' field from @self.
 *
 * Returns: (skip): %TRUE if the field is found, %FALSE otherwise.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_registration_status_output_get_ims_registration_error_code (
    QmiMessageImsaGetImsRegistrationStatusOutput *self,
    guint16 *value_ims_registration_error_code,
    GError **error);


/**
 * qmi_message_imsa_get_ims_registration_status_output_get_ims_registration_error_message:
 * @self: a #QmiMessageImsaGetImsRegistrationStatusOutput.
 * @value_ims_registration_error_message: (out)(optional)(transfer none): a placeholder for the output constant string, or %NULL if not required.
 * @error: Return location for error or %NULL.
 *
 * Get the 'IMS Registration Error Message' field from @self.
 *
 * Returns: (skip): %TRUE if the field is found, %FALSE otherwise.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_registration_status_output_get_ims_registration_error_message (
    QmiMessageImsaGetImsRegistrationStatusOutput *self,
    const gchar **value_ims_registration_error_message,
    GError **error);


/**
 * qmi_message_imsa_get_ims_registration_status_output_get_ims_registration_technology:
 * @self: a #QmiMessageImsaGetImsRegistrationStatusOutput.
 * @value_ims_registration_technology: (out)(optional): a placeholder for the output #QmiImsaRegistrationTechnology, or %NULL if not required.
 * @error: Return location for error or %NULL.
 *
 * Get the 'IMS Registration Technology' field from @self.
 *
 * Returns: (skip): %TRUE if the field is found, %FALSE otherwise.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_registration_status_output_get_ims_registration_technology (
    QmiMessageImsaGetImsRegistrationStatusOutput *self,
    QmiImsaRegistrationTechnology *value_ims_registration_technology,
    GError **error);


/**
 * qmi_message_imsa_get_ims_registration_status_output_ref:
 * @self: a #QmiMessageImsaGetImsRegistrationStatusOutput.
 *
 * Atomically increments the reference count of @self by one.
 *
 * Returns: the new reference to @self.
 *
 * Since: 1.34
 */
QmiMessageImsaGetImsRegistrationStatusOutput *qmi_message_imsa_get_ims_registration_status_output_ref (QmiMessageImsaGetImsRegistrationStatusOutput *self);

/**
 * qmi_message_imsa_get_ims_registration_status_output_unref:
 * @self: a #QmiMessageImsaGetImsRegistrationStatusOutput.
 *
 * Atomically decrements the reference count of @self by one.
 * If the reference count drops to 0, @self is completely disposed.
 *
 * Since: 1.34
 */
void qmi_message_imsa_get_ims_registration_status_output_unref (QmiMessageImsaGetImsRegistrationStatusOutput *self);
G_DEFINE_AUTOPTR_CLEANUP_FUNC (QmiMessageImsaGetImsRegistrationStatusOutput, qmi_message_imsa_get_ims_registration_status_output_unref)

/**
 * qmi_message_imsa_get_ims_registration_status_response_parse:
 * @message: a #QmiMessage.
 * @error: return location for error or %NULL.
 *
 * Parses a #QmiMessage and builds a #QmiMessageImsaGetImsRegistrationStatusOutput out of it.
 * The operation fails if the message is of the wrong type.
 *
 * Returns: a #QmiMessageImsaGetImsRegistrationStatusOutput, or %NULL if @error is set. The returned value should be freed with qmi_message_imsa_get_ims_registration_status_output_unref().
 *
 * Since: 1.34
 */
QmiMessageImsaGetImsRegistrationStatusOutput *qmi_message_imsa_get_ims_registration_status_response_parse (
    QmiMessage *message,
    GError **error);

/*****************************************************************************/
/* REQUEST/RESPONSE: Qmi Message IMSA Get IMS Services Status */


/**
 * SECTION: qmi-message-imsa-get-ims-services-status
 * @title: IMSA Get IMS Services Status response
 * @short_description: Methods to manage the IMSA Get IMS Services Status response.
 *
 * Collection of methods to create requests and parse responses of the IMSA Get IMS Services Status message.
 */

/* --- Input -- */

/* Note: no fields in the Input container */

/* --- Output -- */

/**
 * QmiMessageImsaGetImsServicesStatusOutput:
 *
 * The #QmiMessageImsaGetImsServicesStatusOutput structure contains private data and should only be accessed
 * using the provided API.
 *
 * Since: 1.34
 */
typedef struct _QmiMessageImsaGetImsServicesStatusOutput QmiMessageImsaGetImsServicesStatusOutput;
GType qmi_message_imsa_get_ims_services_status_output_get_type (void) G_GNUC_CONST;
#define QMI_TYPE_MESSAGE_IMSA_GET_IMS_SERVICES_STATUS_OUTPUT (qmi_message_imsa_get_ims_services_status_output_get_type ())


/**
 * qmi_message_imsa_get_ims_services_status_output_get_result:
 * @self: a QmiMessageImsaGetImsServicesStatusOutput.
 * @error: Return location for error or %NULL.
 *
 * Get the result of the QMI operation.
 *
 * Returns: (skip): %TRUE if the QMI operation succeeded, %FALSE if @error is set.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_services_status_output_get_result (
    QmiMessageImsaGetImsServicesStatusOutput *self,
    GError **error);


/**
 * qmi_message_imsa_get_ims_services_status_output_get_ims_sms_service_status:
 * @self: a #QmiMessageImsaGetImsServicesStatusOutput.
 * @value_ims_sms_service_status: (out)(optional): a placeholder for the output #QmiImsaServiceStatus, or %NULL if not required.
 * @error: Return location for error or %NULL.
 *
 * Get the 'IMS SMS Service Status' field from @self.
 *
 * Returns: (skip): %TRUE if the field is found, %FALSE otherwise.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_services_status_output_get_ims_sms_service_status (
    QmiMessageImsaGetImsServicesStatusOutput *self,
    QmiImsaServiceStatus *value_ims_sms_service_status,
    GError **error);


/**
 * qmi_message_imsa_get_ims_services_status_output_get_ims_voice_service_status:
 * @self: a #QmiMessageImsaGetImsServicesStatusOutput.
 * @value_ims_voice_service_status: (out)(optional): a placeholder for the output #QmiImsaServiceStatus, or %NULL if not required.
 * @error: Return location for error or %NULL.
 *
 * Get the 'IMS Voice Service Status' field from @self.
 *
 * Returns: (skip): %TRUE if the field is found, %FALSE otherwise.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_services_status_output_get_ims_voice_service_status (
    QmiMessageImsaGetImsServicesStatusOutput *self,
    QmiImsaServiceStatus *value_ims_voice_service_status,
    GError **error);


/**
 * qmi_message_imsa_get_ims_services_status_output_get_ims_video_telephony_service_status:
 * @self: a #QmiMessageImsaGetImsServicesStatusOutput.
 * @value_ims_video_telephony_service_status: (out)(optional): a placeholder for the output #QmiImsaServiceStatus, or %NULL if not required.
 * @error: Return location for error or %NULL.
 *
 * Get the 'IMS Video Telephony Service Status' field from @self.
 *
 * Returns: (skip): %TRUE if the field is found, %FALSE otherwise.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_services_status_output_get_ims_video_telephony_service_status (
    QmiMessageImsaGetImsServicesStatusOutput *self,
    QmiImsaServiceStatus *value_ims_video_telephony_service_status,
    GError **error);


/**
 * qmi_message_imsa_get_ims_services_status_output_get_ims_sms_service_registration_technology:
 * @self: a #QmiMessageImsaGetImsServicesStatusOutput.
 * @value_ims_sms_service_registration_technology: (out)(optional): a placeholder for the output #QmiImsaRegistrationTechnology, or %NULL if not required.
 * @error: Return location for error or %NULL.
 *
 * Get the 'IMS SMS Service Registration Technology' field from @self.
 *
 * Returns: (skip): %TRUE if the field is found, %FALSE otherwise.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_services_status_output_get_ims_sms_service_registration_technology (
    QmiMessageImsaGetImsServicesStatusOutput *self,
    QmiImsaRegistrationTechnology *value_ims_sms_service_registration_technology,
    GError **error);


/**
 * qmi_message_imsa_get_ims_services_status_output_get_ims_voice_service_registration_technology:
 * @self: a #QmiMessageImsaGetImsServicesStatusOutput.
 * @value_ims_voice_service_registration_technology: (out)(optional): a placeholder for the output #QmiImsaRegistrationTechnology, or %NULL if not required.
 * @error: Return location for error or %NULL.
 *
 * Get the 'IMS Voice Service Registration Technology' field from @self.
 *
 * Returns: (skip): %TRUE if the field is found, %FALSE otherwise.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_services_status_output_get_ims_voice_service_registration_technology (
    QmiMessageImsaGetImsServicesStatusOutput *self,
    QmiImsaRegistrationTechnology *value_ims_voice_service_registration_technology,
    GError **error);


/**
 * qmi_message_imsa_get_ims_services_status_output_get_ims_video_telephony_service_registration_technology:
 * @self: a #QmiMessageImsaGetImsServicesStatusOutput.
 * @value_ims_video_telephony_service_registration_technology: (out)(optional): a placeholder for the output #QmiImsaRegistrationTechnology, or %NULL if not required.
 * @error: Return location for error or %NULL.
 *
 * Get the 'IMS Video Telephony Service Registration Technology' field from @self.
 *
 * Returns: (skip): %TRUE if the field is found, %FALSE otherwise.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_services_status_output_get_ims_video_telephony_service_registration_technology (
    QmiMessageImsaGetImsServicesStatusOutput *self,
    QmiImsaRegistrationTechnology *value_ims_video_telephony_service_registration_technology,
    GError **error);


/**
 * qmi_message_imsa_get_ims_services_status_output_get_ims_ue_to_tas_service_status:
 * @self: a #QmiMessageImsaGetImsServicesStatusOutput.
 * @value_ims_ue_to_tas_service_status: (out)(optional): a placeholder for the output #QmiImsaServiceStatus, or %NULL if not required.
 * @error: Return location for error or %NULL.
 *
 * Get the 'IMS UE to TAS Service Status' field from @self.
 *
 * Returns: (skip): %TRUE if the field is found, %FALSE otherwise.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_services_status_output_get_ims_ue_to_tas_service_status (
    QmiMessageImsaGetImsServicesStatusOutput *self,
    QmiImsaServiceStatus *value_ims_ue_to_tas_service_status,
    GError **error);


/**
 * qmi_message_imsa_get_ims_services_status_output_get_ims_ue_to_tas_service_registration_technology:
 * @self: a #QmiMessageImsaGetImsServicesStatusOutput.
 * @value_ims_ue_to_tas_service_registration_technology: (out)(optional): a placeholder for the output #QmiImsaRegistrationTechnology, or %NULL if not required.
 * @error: Return location for error or %NULL.
 *
 * Get the 'IMS UE to TAS Service Registration Technology' field from @self.
 *
 * Returns: (skip): %TRUE if the field is found, %FALSE otherwise.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_services_status_output_get_ims_ue_to_tas_service_registration_technology (
    QmiMessageImsaGetImsServicesStatusOutput *self,
    QmiImsaRegistrationTechnology *value_ims_ue_to_tas_service_registration_technology,
    GError **error);


/**
 * qmi_message_imsa_get_ims_services_status_output_get_ims_video_share_service_status:
 * @self: a #QmiMessageImsaGetImsServicesStatusOutput.
 * @value_ims_video_share_service_status: (out)(optional): a placeholder for the output #QmiImsaServiceStatus, or %NULL if not required.
 * @error: Return location for error or %NULL.
 *
 * Get the 'IMS Video Share Service Status' field from @self.
 *
 * Returns: (skip): %TRUE if the field is found, %FALSE otherwise.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_services_status_output_get_ims_video_share_service_status (
    QmiMessageImsaGetImsServicesStatusOutput *self,
    QmiImsaServiceStatus *value_ims_video_share_service_status,
    GError **error);


/**
 * qmi_message_imsa_get_ims_services_status_output_get_ims_video_share_service_registration_technology:
 * @self: a #QmiMessageImsaGetImsServicesStatusOutput.
 * @value_ims_video_share_service_registration_technology: (out)(optional): a placeholder for the output #QmiImsaRegistrationTechnology, or %NULL if not required.
 * @error: Return location for error or %NULL.
 *
 * Get the 'IMS Video Share Service Registration Technology' field from @self.
 *
 * Returns: (skip): %TRUE if the field is found, %FALSE otherwise.
 *
 * Since: 1.34
 */
gboolean qmi_message_imsa_get_ims_services_status_output_get_ims_video_share_service_registration_technology (
    QmiMessageImsaGetImsServicesStatusOutput *self,
    QmiImsaRegistrationTechnology *value_ims_video_share_service_registration_technology,
    GError **error);


/**
 * qmi_message_imsa_get_ims_services_status_output_ref:
 * @self: a #QmiMessageImsaGetImsServicesStatusOutput.
 *
 * Atomically increments the reference count of @self by one.
 *
 * Returns: the new reference to @self.
 *
 * Since: 1.34
 */
QmiMessageImsaGetImsServicesStatusOutput *qmi_message_imsa_get_ims_services_status_output_ref (QmiMessageImsaGetImsServicesStatusOutput *self);

/**
 * qmi_message_imsa_get_ims_services_status_output_unref:
 * @self: a #QmiMessageImsaGetImsServicesStatusOutput.
 *
 * Atomically decrements the reference count of @self by one.
 * If the reference count drops to 0, @self is completely disposed.
 *
 * Since: 1.34
 */
void qmi_message_imsa_get_ims_services_status_output_unref (QmiMessageImsaGetImsServicesStatusOutput *self);
G_DEFINE_AUTOPTR_CLEANUP_FUNC (QmiMessageImsaGetImsServicesStatusOutput, qmi_message_imsa_get_ims_services_status_output_unref)

/**
 * qmi_message_imsa_get_ims_services_status_response_parse:
 * @message: a #QmiMessage.
 * @error: return location for error or %NULL.
 *
 * Parses a #QmiMessage and builds a #QmiMessageImsaGetImsServicesStatusOutput out of it.
 * The operation fails if the message is of the wrong type.
 *
 * Returns: a #QmiMessageImsaGetImsServicesStatusOutput, or %NULL if @error is set. The returned value should be freed with qmi_message_imsa_get_ims_services_status_output_unref().
 *
 * Since: 1.34
 */
QmiMessageImsaGetImsServicesStatusOutput *qmi_message_imsa_get_ims_services_status_response_parse (
    QmiMessage *message,
    GError **error);

/*****************************************************************************/
/* Service-specific utils: IMSA */


#if defined (LIBQMI_GLIB_COMPILATION)

G_GNUC_INTERNAL
gchar *__qmi_message_imsa_get_printable (
    QmiMessage *self,
    QmiMessageContext *context,
    const gchar *line_prefix);

#endif


#define HAVE_QMI_SERVICE_IMSA

/*****************************************************************************/
/* CLIENT: QMI Client IMSA */

#define QMI_TYPE_CLIENT_IMSA            (qmi_client_imsa_get_type ())
#define QMI_CLIENT_IMSA(obj)            (G_TYPE_CHECK_INSTANCE_CAST ((obj), QMI_TYPE_CLIENT_IMSA, QmiClientImsa))
#define QMI_CLIENT_IMSA_CLASS(klass)    (G_TYPE_CHECK_CLASS_CAST ((klass),  QMI_TYPE_CLIENT_IMSA, QmiClientImsaClass))
#define QMI_IS_CLIENT_IMSA(obj)         (G_TYPE_CHECK_INSTANCE_TYPE ((obj), QMI_TYPE_CLIENT_IMSA))
#define QMI_IS_CLIENT_IMSA_CLASS(klass) (G_TYPE_CHECK_CLASS_TYPE ((klass),  QMI_TYPE_CLIENT_IMSA))
#define QMI_CLIENT_IMSA_GET_CLASS(obj)  (G_TYPE_INSTANCE_GET_CLASS ((obj),  QMI_TYPE_CLIENT_IMSA, QmiClientImsaClass))

typedef struct _QmiClientImsa QmiClientImsa;
typedef struct _QmiClientImsaClass QmiClientImsaClass;

/**
 * QmiClientImsa:
 *
 * The #QmiClientImsa structure contains private data and should only be accessed
 * using the provided API.
 *
 * Since: 1.34
 */
struct _QmiClientImsa {
    /*< private >*/
    QmiClient parent;
    gpointer priv_unused;
};

struct _QmiClientImsaClass {
    /*< private >*/
    QmiClientClass parent;
};

GType qmi_client_imsa_get_type (void);
G_DEFINE_AUTOPTR_CLEANUP_FUNC (QmiClientImsa, g_object_unref)

/**
 * qmi_client_imsa_get_ims_registration_status:
 * @self: a #QmiClientImsa.
 * @unused: %NULL. This message doesn't have any input bundle.
 * @timeout: maximum time to wait for the method to complete, in seconds.
 * @cancellable: a #GCancellable or %NULL.
 * @callback: a #GAsyncReadyCallback to call when the request is satisfied.
 * @user_data: user data to pass to @callback.
 *
 * Asynchronously sends a Get IMS Registration Status request to the device.
 *
 * When the operation is finished, @callback will be invoked in the thread-default main loop of the thread you are calling this method from.
 *
 * You can then call qmi_client_imsa_get_ims_registration_status_finish() to get the result of the operation.
 *
 * Since: 1.34
 */
void qmi_client_imsa_get_ims_registration_status (
    QmiClientImsa *self,
    gpointer unused,
    guint timeout,
    GCancellable *cancellable,
    GAsyncReadyCallback callback,
    gpointer user_data);

/**
 * qmi_client_imsa_get_ims_registration_status_finish:
 * @self: a #QmiClientImsa.
 * @res: the #GAsyncResult obtained from the #GAsyncReadyCallback passed to qmi_client_imsa_get_ims_registration_status().
 * @error: Return location for error or %NULL.
 *
 * Finishes an async operation started with qmi_client_imsa_get_ims_registration_status().
 *
 * Returns: a #QmiMessageImsaGetImsRegistrationStatusOutput, or %NULL if @error is set. The returned value should be freed with qmi_message_imsa_get_ims_registration_status_output_unref().
 *
 * Since: 1.34
 */
QmiMessageImsaGetImsRegistrationStatusOutput *qmi_client_imsa_get_ims_registration_status_finish (
    QmiClientImsa *self,
    GAsyncResult *res,
    GError **error);

/**
 * qmi_client_imsa_get_ims_services_status:
 * @self: a #QmiClientImsa.
 * @unused: %NULL. This message doesn't have any input bundle.
 * @timeout: maximum time to wait for the method to complete, in seconds.
 * @cancellable: a #GCancellable or %NULL.
 * @callback: a #GAsyncReadyCallback to call when the request is satisfied.
 * @user_data: user data to pass to @callback.
 *
 * Asynchronously sends a Get IMS Services Status request to the device.
 *
 * When the operation is finished, @callback will be invoked in the thread-default main loop of the thread you are calling this method from.
 *
 * You can then call qmi_client_imsa_get_ims_services_status_finish() to get the result of the operation.
 *
 * Since: 1.34
 */
void qmi_client_imsa_get_ims_services_status (
    QmiClientImsa *self,
    gpointer unused,
    guint timeout,
    GCancellable *cancellable,
    GAsyncReadyCallback callback,
    gpointer user_data);

/**
 * qmi_client_imsa_get_ims_services_status_finish:
 * @self: a #QmiClientImsa.
 * @res: the #GAsyncResult obtained from the #GAsyncReadyCallback passed to qmi_client_imsa_get_ims_services_status().
 * @error: Return location for error or %NULL.
 *
 * Finishes an async operation started with qmi_client_imsa_get_ims_services_status().
 *
 * Returns: a #QmiMessageImsaGetImsServicesStatusOutput, or %NULL if @error is set. The returned value should be freed with qmi_message_imsa_get_ims_services_status_output_unref().
 *
 * Since: 1.34
 */
QmiMessageImsaGetImsServicesStatusOutput *qmi_client_imsa_get_ims_services_status_finish (
    QmiClientImsa *self,
    GAsyncResult *res,
    GError **error);

G_END_DECLS

#endif /* __LIBQMI_GLIB_QMI_IMSA__ */
