
CREATE TABLE IF NOT EXISTS "admin" (
  "recipe_id" int(10) NOT NULL,
  "recipe_full_name" text NOT NULL,
  "recipe_publisher" text NOT NULL,
  "recipe_servings" varchar(250) NOT NULL,
  "cooking_time" varchar(250) NOT NULL,
  "recipe_image_URL" varchar(250) NOT NULL,
  "image_URL" varchar(250) NOT NULL,
  "recipe_ingredients_1" varchar(150) NOT NULL,
  "recipe_ingredients_2" text NOT NULL,
  "recipe_ingredients_3" varchar(50) NOT NULL,
  "recipe_ingredients_4" text NOT NULL,
  "recipe_ingredients_5" text NOT NULL,
  "recipe_ingredients_6" text NOT NULL,
  "recipe_source_URL" text NOT NULL,
  "recipe_bookmarking" int(50) NOT NULL,
  PRIMARY KEY ("recipe_id")
);
