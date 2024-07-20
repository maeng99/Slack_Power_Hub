import { Migration } from '@mikro-orm/migrations';

export class Migration20240719234548 extends Migration {

  async up(): Promise<void> {
    this.addSql('drop table if exists `energy`;');

    this.addSql('drop table if exists `metric`;');

    this.addSql('alter table `plugs` drop foreign key `FKp20xxolv6sfgdob1v2nvud51e`;');

    this.addSql('alter table `users` modify `id` int unsigned not null auto_increment, modify `name` varchar(255) not null, modify `slack_user_id` varchar(255) not null;');

    this.addSql('alter table `plugs` modify `id` int unsigned not null auto_increment, modify `mode` tinyint(1) not null default false, modify `name` varchar(255) not null, modify `status` varchar(255) not null default \'OFF\', modify `time` int, modify `user_id` int unsigned not null;');
    this.addSql('alter table `plugs` drop index `FKp20xxolv6sfgdob1v2nvud51e`;');
    this.addSql('alter table `plugs` add constraint `plugs_user_id_foreign` foreign key (`user_id`) references `users` (`id`) on update cascade;');
    this.addSql('alter table `plugs` add unique `plugs_name_unique`(`name`);');
    this.addSql('alter table `plugs` rename index `fkp20xxolv6sfgdob1v2nvud51e` to `plugs_user_id_index`;');
  }

  async down(): Promise<void> {
    this.addSql('create table `energy` (`id` bigint unsigned not null auto_increment primary key, `energy` double null, `stack` bigint null, `plug_id` bigint null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `energy` add index `FKnsaajb5paau1ejuounsj5caau`(`plug_id`);');

    this.addSql('create table `metric` (`id` bigint unsigned not null auto_increment primary key, `amount` double null, `plug_id` bigint null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `metric` add index `FKiqgm4o1bxbpu2ipyg8ndwf99p`(`plug_id`);');

    this.addSql('alter table `energy` add constraint `FKnsaajb5paau1ejuounsj5caau` foreign key (`plug_id`) references `plugs` (`id`) on update no action on delete no action;');

    this.addSql('alter table `metric` add constraint `FKiqgm4o1bxbpu2ipyg8ndwf99p` foreign key (`plug_id`) references `plugs` (`id`) on update no action on delete no action;');

    this.addSql('alter table `plugs` drop foreign key `plugs_user_id_foreign`;');

    this.addSql('alter table `plugs` modify `id` bigint unsigned not null auto_increment, modify `name` varchar(255) null, modify `user_id` bigint null, modify `status` varchar(255) null, modify `mode` bit(1) null, modify `time` bigint;');
    this.addSql('alter table `plugs` drop index `plugs_name_unique`;');
    this.addSql('alter table `plugs` add constraint `FKp20xxolv6sfgdob1v2nvud51e` foreign key (`user_id`) references `users` (`id`) on update no action on delete no action;');
    this.addSql('alter table `plugs` add index `FKp20xxolv6sfgdob1v2nvud51e`(`user_id`);');
    this.addSql('alter table `plugs` rename index `plugs_user_id_index` to `FKp20xxolv6sfgdob1v2nvud51e`;');

    this.addSql('alter table `users` modify `id` bigint unsigned not null auto_increment, modify `name` varchar(255) null, modify `slack_user_id` varchar(255) null;');
  }

}
