#include <linux/module.h>
#define INCLUDE_VERMAGIC
#include <linux/build-salt.h>
#include <linux/elfnote-lto.h>
#include <linux/vermagic.h>
#include <linux/compiler.h>

BUILD_SALT;
BUILD_LTO_INFO;

MODULE_INFO(vermagic, VERMAGIC_STRING);
MODULE_INFO(name, KBUILD_MODNAME);

__visible struct module __this_module
__section(".gnu.linkonce.this_module") = {
	.name = KBUILD_MODNAME,
	.init = init_module,
#ifdef CONFIG_MODULE_UNLOAD
	.exit = cleanup_module,
#endif
	.arch = MODULE_ARCH_INIT,
};

MODULE_INFO(intree, "Y");

#ifdef CONFIG_RETPOLINE
MODULE_INFO(retpoline, "Y");
#endif

MODULE_INFO(depends, "bluetooth,btqca,btrtl");

MODULE_ALIAS("of:N*T*Crealtek,rtl8822cs-bt");
MODULE_ALIAS("of:N*T*Crealtek,rtl8822cs-btC*");
MODULE_ALIAS("of:N*T*Crealtek,rtl8723bs-bt");
MODULE_ALIAS("of:N*T*Crealtek,rtl8723bs-btC*");
MODULE_ALIAS("of:N*T*Crealtek,rtl8723ds-bt");
MODULE_ALIAS("of:N*T*Crealtek,rtl8723ds-btC*");
MODULE_ALIAS("of:N*T*Cqcom,qca6174-bt");
MODULE_ALIAS("of:N*T*Cqcom,qca6174-btC*");
MODULE_ALIAS("of:N*T*Cqcom,qca6390-bt");
MODULE_ALIAS("of:N*T*Cqcom,qca6390-btC*");
MODULE_ALIAS("of:N*T*Cqcom,qca9377-bt");
MODULE_ALIAS("of:N*T*Cqcom,qca9377-btC*");
MODULE_ALIAS("of:N*T*Cqcom,wcn3990-bt");
MODULE_ALIAS("of:N*T*Cqcom,wcn3990-btC*");
MODULE_ALIAS("of:N*T*Cqcom,wcn3991-bt");
MODULE_ALIAS("of:N*T*Cqcom,wcn3991-btC*");
MODULE_ALIAS("of:N*T*Cqcom,wcn3998-bt");
MODULE_ALIAS("of:N*T*Cqcom,wcn3998-btC*");
MODULE_ALIAS("of:N*T*Cqcom,wcn6750-bt");
MODULE_ALIAS("of:N*T*Cqcom,wcn6750-btC*");

MODULE_INFO(srcversion, "C396900618E7F94590345DB");
